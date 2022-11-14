

<?php
include "../auth/jwt.php";
include "connect.php";    
$user=$_POST["user"];
$password=$_POST["password"];
$sql = "SELECT username,password FROM user WHERE password ='$password'AND user='$username'";
  if ($conn->query($sql))
   


?>