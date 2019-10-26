<?php
$username = "root";
$password = "";
$hostname = "localhost"; 
$database = "veneer"; 
//connection to the database


$db = mysqli_connect($hostname, $username, $password,$database)
  or die("Unable to connect to MySQL");


?>