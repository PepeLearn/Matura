

<?php
include "../auth/jwt.php";
include "connect.php";    
$username=$_POST["username"];
$password=$_POST["password"];
$sql = "SELECT username,password FROM user WHERE password ='$password'AND user='$username'";
  if ($conn->query($sql))
  {
    $payload = array ( // doda username in password k payloadu
      'password' => $password,
      'username:' => $username
    );
    $generate = new JWT(); 
    $token = $generate->generate($payload); // generira token z payloadom

  } 
  else // ce sql ne vrne vnosa, vrne kodo 401 (unauthorised) v http header
  {
    header("HTTP/1.1 401 Unauthorized");
    exit;
  }
  



?>