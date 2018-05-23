const mysql = require('mysql');
const config = require('../config.js');

const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
});

const query = (sql, values) => new Promise((resolve, reject) => {
  pool.getConnection((err, connection) => {
    if (err) {
      reject(err);
    } else {
      connection.query(sql, values, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
        connection.release();
      });
    }
  });
});

const mutipleQuery = sqlList => Promise.all(sqlList.map(sql => query(sql)));

const createTable = sql => query(sql, []);

// 注册用户
const insertData = (value) => {
  const _sql = 'insert into users set name=?,pass=?,avator=?,moment=?;';
  return query(_sql, value);
};

// 删除用户
const deconsteUserData = (name) => {
  const _sql = `deconste from users where name="${name}";`;
  return query(_sql);
};

// 查找用户
const findUserData = (name) => {
  const _sql = `select * from users where name="${name}";`;
  return query(_sql);
};

// 发表文章
const insertArticle = (value) => {
  const _sql = 'insert into article set title=?,sort=?,digest=?,content=?,date=?;';
  return query(_sql, value);
};

// 更新文章
const updateArticle = (value) => {
  const _sql = 'update article set title=?,sort=?,digest=?,content=?,date=? where id=?;';
  return query(_sql, value);
};

// 删除文章
const deleteArticle = (value) => {
  const _sql = `delete from  article where id=${value}`;
  return query(_sql);
};

// 查询文章列表
const queryArticleByPage = (currentPage, pageSize, sort, type, key) => {
  let _sql = '';
  const sortPrefix = sort === 'all' ? '' : ` and article.sort='${sort}'`;
  let typePrefix = '';
  if (type !== 'all') {
    typePrefix = key ? ` and article.${type} like '%${key}%'` : '';
  } else {
    typePrefix = key ? ` and (article.title like '%${key}%' or article.digest like '%${key}%' or article.content like '%${key}%')` : '';
  }
  _sql = `select article.*, sort.name as sortName FROM article, sort where 1=1${sortPrefix}${typePrefix} and article.sort=sort.type order by article.date desc limit ${(currentPage - 1) * pageSize}, ${pageSize};`;
  // return query(_sql);
  const _sqlCount = `select count(1) as total FROM article where 1=1${sortPrefix}${typePrefix} order by date desc`;
  return mutipleQuery([_sql, _sqlCount]);
};

// 查询文章详情
const queryArticleById = (id) => {
  const _sql = `select * FROM article where id = ${id}`;
  return query(_sql);
};

// 新增分类
const insertSort = (value) => {
  const _sql = 'insert into sort set name=?,type=?,description=?,logo=?,date=?;';
  return query(_sql, value);
};

// 查询菜单
const queryMenu = () => {
  const _sql = 'select * FROM menu';
  return query(_sql);
};

module.exports = {
  query,
  createTable,
  insertData,
  deconsteUserData,
  findUserData,
  insertArticle,
  updateArticle,
  deleteArticle,
  queryArticleByPage,
  queryArticleById,
  insertSort,
  queryMenu
};

