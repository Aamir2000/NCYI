<?php
include "./connection.php";
$data = [];
$table_Name = "user_details";


if(isset($conn)){
    $query = mysqli_query($conn, "SELECT * FROM $table_Name LIMIT 0, 10");
    
    while($res = mysqli_fetch_assoc($query)){
        array_push($data, $res);
    }
    #echo json_encode($data);
}else{
    echo "Sorry some error has occured couldn't connect to the database";
}




if($_POST["Action"]){
    $query = mysqli_query($conn, "SELECT * FROM $table_Name;");
    $json = [
        "Action"=>"get",
        "Args"=>[
            "num" => mysqli_num_rows($query)
            ]
    ];
    if($_POST['Action'] == 'get'){
        print_r(json_encode($json));
    }
        
};
