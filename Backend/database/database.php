<?php
include "../auth/jwt.php";
include "connect.php";    
$username=$_GET["username"];
$password=$_GET["password"];
$sql = "SELECT * FROM users WHERE password ='$password'AND username='$username'";
$result = $conn->query($sql);
  if ($result->num_rows > 0)
  {
    $payload = array ( // doda username in password k payloadu
      'password' => $password,
      'username' => $username
    );
    $generate = new JWT(); 
    $token = $generate->generate($payload); // generira token z payloadom
    echo ( "Authorization Bearer: $token"  );
  } 
  else // ce sql ne vrne vnosa, vrne kodo 401 (unauthorised) v http header
  {
    header("HTTP/1.1 401 Unauthorized");
    exit;
  }
  



?>