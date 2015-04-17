<?php

    require_once (__DIR__ . "/../model/config.php");
    //Require_once is directing the code to stuff from config.php//

    $query = $_SESSION["connection"]->query("CREATE TABLE posts("
            . "id int(11) NOT NULL AUTO_INCREMENT,"
            . "title varchar(255)NOT NULL,"
            . "post text NOT NULL,"
            . "PRIMARY KEY (id))");
    //The query is all  this infromation that gets send and save at localhost

    if($query){
        echo "<p>Successfully create table: posts</p>";
    }
    else{
      echo "<p>" . $_SESSION["connection"]->error . "</p>";    
    }

    $query = $_SESSION["connection"]->query("CREATE TABLE users("
            . "id int(11) NOT NULL AUTO_INCREMENT,"
            . "username varchar(30) NOT NULL,"
            . "email varchar(50) NOT NULL,"
            . "password char(128) NOT NULL,"
            . "salt char(128) NOT NULL,"
            . "PRIMARY KEY (id))");
    //The query is all and the login username,password, and email infromation that gets send and save at localhost
    
    if($query){
       echo "<p>Successfully create table: users</p>";
       // This will pop up on your blog saying you did successfully craeted users table
    } else{
       echo "<p>" . $_SESSION["connection"]->error . "</p>";
       // This will pop up on your blog saying you did that there is a error
    }
