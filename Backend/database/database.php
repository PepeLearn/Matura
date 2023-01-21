<?php
/* 
Vsebuje vse funkcije, za delo s podatkovno bazo. 

*/
include "../auth/jwt.php";
include "connect.php";
include "admin.php";
include "account.php";
include "catalog.php";
$request_body = file_get_contents('php://input');
if (isset($_GET["login"])) // WIP
{
  $payload = json_decode($request_body);
  cors('http://localhost'); // dovoli povezavo samo s tega URL, drugace ne stima
  $login = new login;
  $token = $login->login($conn, $payload); // ustvari token
  if ($token) {
    echo ("{\"Authorization\" : \"$token\"}"); // vrne token
    http_response_code(200); // status OK
  } else {
    http_response_code(403); // status forbidden
  }
}
if (isset($_GET["signup"])) {
  $payload = json_decode($request_body);
  cors('http://localhost'); // dovoli povezavo samo s tega URL, drugace ne stima
  $signup = new login;
  if ($signup->signup($conn, $payload))
    http_response_code(201); // status Created
  else
   http_response_code(400); // 400 bad request (manjka geslo, username ali vsebuje nedovoljene znake)
}

if (isset($_GET["productCatalog"])) {
  cors('http://localhost'); // dovoli povezavo samo s tega URL, drugace ne stima
  $productCatalog = new catalog;
  if ($productCatalog->getCatalog($conn)) {
     // da dela pa ne mece napak
    http_response_code(200);  // status OK
  } else {
    http_response_code(404); // vrne not found ce nekaj ne stima
  }
}
