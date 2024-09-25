<?php
include_once 'dbc.php';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$sql = "INSERT INTO users (name,email,message) VALUES ('$name','$email','$message');";
$result = mysqli_query($connect,$sql);

header("Location:contact.html?success=true")
?>