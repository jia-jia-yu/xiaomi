<?php
    header("Content-type: text/html; charset=UTF-8");
    // $id = $_GET["id"];
    // $pass = $_GET["pass"];
    $coon = new mysqli("localhost","root","","xiaomi_login","3306");
    $coon -> query("set names 'utf8'");
    $coon -> query("set charactor set 'utf8'");
    $sql = "SELECT * from shop";
    // $insert_sql = "INSERT into shop (usern, password) VALUES ('$username', '$pass')";
    $result = $coon -> Query($sql);
    // $rows = json_encode($rows);
    $num = mysqli_num_rows($result);
    $arr = array();
    for($i=0;$i<$num;$i++){
        $rows = $result -> fetch_assoc();
        // $rows1 = json_encode($rows);
        array_push($arr,$rows);
        // $arr[] = $rows;
    }
    // echo $arr;
    
    echo json_encode($arr);
    // echo json_encode($rows);
    // echo $rows;
?>