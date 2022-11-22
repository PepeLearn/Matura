<?php
/* 
Vsebuje vse funkcije, za delo s podatkovno bazo. 

*/
include "../auth/jwt.php";
include "connect.php";
include "admin.php";
include "login.php";
include "catalog.php";

if (isset($_GET["login"])) // WIP
{
 $login = new login;
 $token = $login->login($conn, $payload);
echo($token);
}
if (isset($_GET["signup"]))
{


}
if(isset($_GET["productCatalog"]))
{
  $productCatalog = new catalog;

}

?>