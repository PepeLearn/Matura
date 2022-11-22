<?php
/* 
Vsebuje vse funkcije, za delo s podatkovno bazo. 

*/
include "../auth/jwt.php";
include "connect.php";
include "admin.php";
include "account.php";
include "catalog.php";
$payload = array();
$payload = $_GET;
if (isset($_GET["login"])) // WIP
{
 $login = new login;
 $token = $login->login($conn, $payload); // ustvari token
 if ($token)
 {
  echo ("Authorization: Bearer $token"); // vrne token
  http_response_code(200); // status OK
 }
 else
 {
  http_response_code(403); // status forbidden
 }
}
if (isset($_GET["signup"]))
{
  $login->signup($conn, $payload); // WIP

}

if(isset($_GET["productCatalog"]))
{
  $productCatalog = new catalog;

}

?>