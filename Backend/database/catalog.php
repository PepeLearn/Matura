<?php
class catalog
{

    public function getCatalog($conn)
    { // WIP
        $sql = "SELECT p.productName, p.productPrice, p.productCategory, GROUP_CONCAT(t.tagName SEPARATOR ', ') AS 'tags' FROM product p, tags t,tagtoproduct tp WHERE p.id = tp.productID AND t.id = tp.TagID GROUP BY productName; ";
        $statement = $conn->prepare($sql);
        $statement->execute();
        while ($row = $statement->fetch()) { // hardcoded, ker drugace nena vredi dela
            $tags = explode(",", $row["tags"]);
            $product =  array(
              "Name" => $row["ProductName"],
              "Price" => $row["ProductPrice"],
              "Category" => $row["ProductCategory"],
              "Tags" => $tags 
            );
            echo json_encode($product);
        }
        return true;
    }
}
