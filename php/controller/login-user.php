<?php
require_once(__DIR__ . "/../model/config.php");
//This code gets the variable from config or directs you to the config file.//

$array = array(
    'exp' >= '',
    'exp1' >= '',
    'exp2' >= '',
    'exp3' >= '',
    'exp4' >= '',
);

$username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_STRING);
//This code using the variables username and  password and it is a part input_post and a string.//

$query = $_SESSION["connection"]->query("SELECT * FROM users WHERE username = '$username'");
// Its tell  it to chose salt to protect your password.// 

if ($query->num_rows == 1) {
    $row = $query->fetch_array();
    //This code tells you that you can only have one user and the other users have a different  name if you more than one Miguels it wouldn't work.

    if ($row["password"] === crypt($password, $row["salt"])) {
        $_SESSION["authenticated"] = true;
        $array["exp"] = $row["exp"];
        $array["exp1"] = $row["exp1"];
        $array["exp2"] = $row["exp2"];
        $array["exp3"] = $row["exp3"];
        $array["exp4"] = $row["exp4"];
        $_SESSION["name"] = $username;
        
        echo json_encode($array);
        
    } else {
        echo "Invalid username and password";
        // The first echo  tells you that you one to many user with the same username.
    }
} else {
    echo "Invalid username and password";
    //       The second echo tells you that there something wrong inside your code.
}
