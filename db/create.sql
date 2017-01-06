CREATE DATABASE blog;
use blog;

CREATE TABLE posts(
    ID              INT             NOT NULL,
    NAME            VARCHAR(40)     NOT NULL,

    TITLE           VARCHAR(400)    NOT NULL,
    DESCRIPTION     VARCHAR(1000)   NOT NULL,
    POST            MEDIUMTEXT   NOT NULL,
    
    POSTDATE        DATETIME        NOT NULL,
    UPDATETIME      DATETIME        NOT NULL,
    PRIMARY KEY(ID)
);
