<?php
include "connect.php";
class admin
{
    public function insertProduct($payload, $conn) // vnese produkt v tabelo
    {
        $productName = $payload['productName'];
        $productPrice = $payload['productPrice'];
        $productCategory = $payload['productCategory'];
        $sql = "INSERT INTO products (name,price,category) VALUES ('$productName',$productPrice,'$productCategory')";
        if ($conn->query($sql))
            return true;
    }
    public function insertTag($payload, $conn) // funkicija za dodajanje tagov ($payload): array , ki vsebuje polja 'tagName'
    {
        if (!isset($payload['tagName']) || !isset($payload['id'])) { // preveri ce je payload array valid
            return  false;
        }
        $tagName = $payload['tagName'];
        $productID = $payload['id'];
        $sql = "SELECT * FROM tags WHERE TagName ='$tagName'"; // preveri ce obstaja tag
        $result = $conn->query($sql);
        if ($result->num_rows > 0) { // ce ze obstaja tag, doda tag na naveden product.
            mysqli_fetch_assoc($result);
            $TagID = $result['id'];
            $sql = "INSERT INTO  TagToProduct VALUES ($productID, $TagID ')";
            $conn->query($sql);
        } else { // ce ne , naredi tag in ga doda na product
            $sql = "INSERT INTO  tags (TagName) VALUES ('$tagName')"; // inserta novi tag
            $result = $conn->query($sql);
            mysqli_fetch_assoc($result);
            $TagID = $result['id'];
            $sql = "INSERT INTO  TagToProduct VALUES ($productID, $TagID ')"; // doda tag na naveden product
            $conn->query($sql);
        }
        return true;
    }


    public function deleteProduct($payload, $conn) // odstrani product
    {
        if (!isset($payload['ProductID'])){
            return false;
        }
        $ProductID = $payload['ProductID'];
        $sql = "DELETE from products WHERE id=$ProductID";
        if ($conn->query($sql)){
            return true;
        }
        return false;

    }
}
