CREATE DATABASE blog;
use blog;

CREATE TABLE posts(
    id              INT             NOT NULL        AUTO_INCREMENT  primary key,
    name            VARCHAR(40)     NOT NULL,

    title           VARCHAR(400)    NOT NULL,
    description     VARCHAR(1000)   NOT NULL,
    post            MEDIUMTEXT      NOT NULL,
    
    postdate        TIMESTAMP       NOT NULL default now(),
    updatetime      TIMESTAMP       NOT NULL default now() on update now(),

    seo             VARCHAR(50)     NOT NULL
);


-- INSERT INTO posts(NAME, TITLE, DESCRIPTION, POST, SEO)
--             VALUES ('Richard', 'Test post', 'test description', 'test post data', 'test SEO');