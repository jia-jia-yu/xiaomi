<?php
    header("Content-type: text/html; charset=UTF-8");
    $username = $_GET["user"];
    $pass = $_GET["pass"];
    $coon = new mysqli("localhost","root","","xiaomi_login","3306");
    $sql = "SELECT * from xiaomi where username = '$username' and password = '$pass'";
    // $insert_sql = "INSERT into xiaomi (username, password) VALUES ('$username', '$pass')";
    $result = $coon -> Query($sql);
    $rows = $result -> fetch_assoc();
    // $rows = json_encode($rows);
    if($rows){
        echo '登录成功';
    }else{
        echo '用户名或密码错误';
    }
?>