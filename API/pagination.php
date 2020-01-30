<?php

include "./connection.php";
$table_Name = "user_details";

if($_POST["pagination"]){
    $query = mysqli_query($conn, "SELECT * FROM $table_Name;");
    $json = [
        "action"=>"get_pages",
        "args"=>[
            "num" => mysqli_num_rows($query)
            ]
    ];
    if($_POST['pagination'] == 'get_pages'){
        print_r(json_encode($json));
    }
        
};


