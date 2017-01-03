CREATE TABLE blog(
    ID              INT             NOT NULL,
    NAME            VARCHAR(40)     NOT NULL,
    POSTDATE        DATETIME        NOT NULL,
    TITLE           VARCHAR(400)    NOT NULL,
    DESCRIPTION     VARCHAR(1000)   NOT NULL,
    POST            VARCHAR(1000)   NOT NULL,
    PRIMARY KEY(ID)
);