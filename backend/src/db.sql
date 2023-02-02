-- Active: 1667399981924@@127.0.0.1@3306@portfolio

DROP TABLE IF EXISTS messages;

CREATE TABLE
    messages (
        id int primary key NOT NULL AUTO_INCREMENT,
        firstname varchar(255) NOT NULL,
        lastname varchar(255) NOT NULL,
        number varchar(255) NULL,
        email varchar(255) NOT NULL,
        message varchar(255) NOT NULL
    ) DEFAULT CHARSET = utf8mb3;