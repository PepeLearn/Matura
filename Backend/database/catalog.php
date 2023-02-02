<?php
class catalog
{

    public function getCatalog($conn)
    { // WIP

        $sql = "SELECT p.ProductName, p.ProductPrice, p.ProductCategory, GROUP_CONCAT(t.tagName SEPARATOR ', ') AS 'tags' FROM products p, tags t,tagToProduct tp WHERE p.id = tp.ProductID AND t.id = tp.TagID GROUP BY productName; ";
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
