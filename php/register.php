<?php
    header("Content-type: text/html; charset=UTF-8");
    $username = $_GET["user"];
    $pass = $_GET["pass"];
    $coon = new mysqli("localhost","root","","xiaomi_login","3306");
    $sql = "SELECT username from xiaomi where username = '$username'";
    $insert_sql = "INSERT into xiaomi (username, password) VALUES ('$username', '$pass')";
    $result = $coon -> Query($sql);
    $rows = $result -> fetch_assoc();
    $rows = json_encode($rows);
    // echo $rows;
    // echo $rows;
    if($rows != "null"){
        echo '用户名已存在';
    }else if($rows == "null"){
        // echo $rows;
        $result = $coon -> query($insert_sql);
        // echo $result;
        if($result){
            echo '注册成功';
        }
    }
?>