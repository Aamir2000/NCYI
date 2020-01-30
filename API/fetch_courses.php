<?php
include "./connection.php";
$data = [];
$table_Name = "user_details";


if(isset($conn)){


if($_POST["get_courses"]){
    $res = json_decode($_POST["get_courses"]);
    $lowerLimit = $res->lowerLimit;
    $upperLimit = $res->upperLimit;
    
    $query = mysqli_query($conn, "SELECT * FROM $table_Name LIMIT $lowerLimit, $upperLimit");
    while($res = mysqli_fetch_assoc($query)){
        array_push($data, $res);
    }
    $json = [
        "action"=>"get_courses",
        "args"=>[
            "courses" => $data,
            "currUpper" => $upperLimit,
            "currLower" => $lowerLimit
            ]
    ];
    print_r(json_encode($json));
};



}
else{
    echo "Sorry some error has occured couldn't connect to the database";
}
