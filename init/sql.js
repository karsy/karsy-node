const users =
    `create table if not exists users(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL,
     pass VARCHAR(100) NOT NULL,
     avator VARCHAR(100) NOT NULL,
     moment VARCHAR(100) NOT NULL,
     PRIMARY KEY ( id )
    );`

const article =
    `create table if not exists article(
     id INT NOT NULL AUTO_INCREMENT,
     title VARCHAR(100) NOT NULL,
     digest VARCHAR(100) NOT NULL,
     content TEXT(0) NOT NULL,
     date DATETIME NOT NULL,
     sort VARCHAR(100) NOT NULL,
     PRIMARY KEY ( id )
    )ENGINE=InnoDB DEFAULT CHARSET=utf8;`

const sort =
    `create table if not exists sort(
     id INT NOT NULL AUTO_INCREMENT,
     type VARCHAR(100) NOT NULL,
     name VARCHAR(100) NOT NULL,
     icon VARCHAR(100) NOT NULL,
     PRIMARY KEY ( id )
    )ENGINE=InnoDB DEFAULT CHARSET=utf8;`

module.exports = {
  users,
  article,
  sort
};