<?php

include "./connection.php";


if($_POST["data"]){
    $data = json_decode($_POST["data"]);
    $table_name = "users";
    $name = mysqli_real_escape_string($conn,$data->userName);
    $email = mysqli_real_escape_string($conn,$data->userEmail);
    $phone = mysqli_real_escape_string($conn,$data->userPhone);
    $message = mysqli_real_escape_string($conn,$data->userMessage);
    $query = mysqli_query($conn, "INSERT INTO $table_name VALUES (\"$name\", \"$email\", $phone, \"$message\", 0);");
    $rows = mysqli_affected_rows($conn);

    if($rows >= 0){
        $res = [
            "action" => "data_saved",
            "message" => "Hello $name, Thanks for contacting us we'll reply back within 2-3 working days."
        ];
        echo json_encode($res);
    }
    else{
        $res = [
            "action" => "data_fail",
            "message" => "Hello $name, Sorry for inconvenience we were unable to process your request please try calling us directly or try again."
        ];
        echo json_encode($res);
    }
}


