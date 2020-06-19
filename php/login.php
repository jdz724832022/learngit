<?php  
include_once("conn.php");
$name=$_POST["username"];
$pwd=$_POST["pwd"];

$sql="select * from mytb where name='$name' and password='$pwd' ";


if($conn->query($sql)){
    echo "1";
}else{
    echo "0";
}



?>