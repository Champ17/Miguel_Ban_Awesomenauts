<?php

    require_once (__DIR__ . "/../model/config.php");
    //Require_once is directing the code to stuff from config.php//

    $query = $_SESSION["connection"]->query("CREATE TABLE users("
            . "id int(11) NOT NULL AUTO_INCREMENT,"
            . "username varchar(30) NOT NULL,"
            . "email varchar(50) NOT NULL,"
            . "password char(128) NOT NULL,"
            . "salt char(128) NOT NULL,"
            . "exp int(4),"
            . "exp1 int(4),"
            . "exp2 int(4),"
            . "exp3 int(4),"
            . "exp4 int(4),"
            . "PRIMARY KEY (id))");
    //The query is all and the login username,password, and email infromation that gets send and save at localhost
