<?php
 include "connect.php";
 class admin
 {
    public function insertProduct($payload) // vnese produkt v tabelo
    {
        $productName = $payload['productName'];
        $productPrice = $payload['productPrice'];
        $productCategory = $payload['productCategory'];
        $sql = "INSERT INTO products (name,price,category) VALUES ('$productName',$productPrice,'$productCategory')";

    }

 }





?>