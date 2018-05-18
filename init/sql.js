const users =
    `create table if not exists users(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(20) NOT NULL,
     pass VARCHAR(20) NOT NULL,
     avator VARCHAR(100) NOT NULL,
     date DATETIME NOT NULL,
     PRIMARY KEY ( id )
    );`;

const article =
    `create table if not exists article(
     id INT NOT NULL AUTO_INCREMENT,
     title VARCHAR(10) NOT NULL,
     digest VARCHAR(200) NOT NULL,
     content TEXT(0) NOT NULL,
     date DATETIME NOT NULL,
     sort VARCHAR(100) NOT NULL,
     PRIMARY KEY ( id )
    )ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

const sort =
    `create table if not exists sort(
     id INT NOT NULL AUTO_INCREMENT,
     type VARCHAR(10) NOT NULL,
     name VARCHAR(10) NOT NULL,
     logo VARCHAR(100) NOT NULL,
     description VARCHAR(100) NOT NULL,
     date DATETIME NOT NULL,
     PRIMARY KEY ( id )
    )ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

module.exports = {
  users,
  article,
  sort
};
