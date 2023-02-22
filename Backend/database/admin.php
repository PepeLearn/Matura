<?php
class admin
{
    public function insertProduct($payload, $conn) // vnese produkt v tabelo
    {
        $ProductName = $payload['productName'];
        $ProductPrice = $payload['productPrice'];
        $ProductCategory = $payload['productCategory'];
        $sql = "INSERT INTO product (productName,productPrice,productCategory) VALUES ('$ProductName',$ProductPrice,'$ProductCategory')";
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
            $sql = "INSERT INTO tagtoproduct VALUES ($productID, $TagID ')";
            $conn->query($sql);
        } else { // ce ne , naredi tag in ga doda na product
            $sql = "INSERT INTO tags (tagName) VALUES ('$tagName')"; // inserta novi tag
            $result = $conn->query($sql);
            mysqli_fetch_assoc($result);
            $TagID = $result['id'];
            $sql = "INSERT INTO tagtoproduct VALUES ($productID, $TagID ')"; // doda tag na naveden product
            $conn->query($sql);
        }
        return true;
    }


    public function deleteProduct($payload, $conn) // odstrani product
    {
        if (!isset($payload['ProductID'])) {
            return false;
        }
        $ProductID = $payload['ProductID'];
        $sql = "DELETE from product WHERE id=$ProductID";
        if ($conn->query($sql)) { // zazene sql
            return true; // ce je slo skozi vrne true
        }
        return false; // drugace vrne false
    }
    public function updateProduct($payload, $conn) // posodobi product
    {
        if (!isset($payload['ProductID']) || !isset($payload['ProductPrice']) || !isset($payload['ProductName']) || !isset($payload['ProductCategory'])) { // preveri ce je  $payload valid
            return false;
        }
        $ProductID = $payload['ProductID'];
        $ProductName = $payload['ProductName'];
        $ProductCategory = $payload['ProductCategory'];
        $ProductPrice = $payload['ProductPrice'];
        $sql = "UPDATE product SET productName = '$ProductName', productPrice = '$ProductPrice', productCategory = '$ProductCategory' WHERE id = '$ProductID'";
        if ($conn->query($sql)) { // zazene sql
            return true; // ce je slo skozi vrne true
        }
        return false; // drugace vrne false
    }
}
