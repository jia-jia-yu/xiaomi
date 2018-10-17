<?php
    header("Content-type: text/html; charset=UTF-8");
    $id = $_GET["id"];
    $coon = new mysqli("localhost","root","","xiaomi_login","3306");
    $coon -> query("set names 'utf8'");
    $coon -> query("set charactor set 'utf8'");
    // for($i;$i<$id->)
    $arr = array();
    foreach($id as $value){
        foreach($value as $key => $val){
            $sql = "SELECT * from shop where id = '$val'";
            $result = $coon -> Query($sql);
            // $rows = json_encode($rows);
            $num = mysqli_num_rows($result);
            $rows = $result -> fetch_assoc();
                array_push($arr,$rows);
        }
    }
    echo json_encode($arr);
?>