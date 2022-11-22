<?php
include "connect.php";
class catalog {

public function getCatalog($conn) {

    $sql = "SELECT p.ProductName, p.ProductPrice, p.ProductCategory, t.TagName FROM p products,t tags, tp tagToProduct WHERE p.id = tp.id AND t.id = tp.id";
    $result = $conn->query($sql);    



}
}


?>