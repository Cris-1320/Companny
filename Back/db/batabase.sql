CREATE DATABASE IF NOT EXISTS AyPcompany;

use AyPcompany;

CREATE TABLE
    productos(
        id INT (11) NOT NULL AUTO_INCREMENT,
        nombre VARCHAR(45) DEFAULT NULL,
        descripcion VARCHAR(100) DEFAULT NULL,
        precio INT(5) DEFAULT NULL,
        PRIMARY KEY(id)
    );

DESCRIBE productos;

INSERT INTO productos
VALUES (
        1,
        'Mesa',
        'Mesa pegable filadelfia',
        38000
    ), (
        2,
        'silla',
        'LA del pipe',
        38000
    ), (
        3,
        'Mesa',
        'Mesa pegable filadelfia',
        38000
    ), (
        4,
        'auto',
        'Mesa pegable filadelfia',
        38000
    ), (
        5,
        'chosa',
        'Mesa pegable aaaaaa',
        38000
    )