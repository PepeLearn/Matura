<?php
class catalog
{

    public function getCatalog($conn)
    { // WIP
        $sql = "SELECT p.productName, p.productPrice, p.productCategory,p.id, GROUP_CONCAT(t.tagName SEPARATOR ', ') AS 'tags' FROM product p, tags t,tagtoproduct tp WHERE p.id = tp.productID AND t.id = tp.TagID GROUP BY productName; ";
        $fetchProducts = $conn->prepare($sql);
        $fetchProducts->execute();
        $sql = "SELECT v.color,v.size,v.stock FROM productvariant v,product p WHERE p.id = :productid AND p.id = v.productID;";
        $fetchProductVariant = $conn->prepare($sql);
        while ($productRow = $fetchProducts->fetch()) { // hardcoded, ker drugace nena vredi dela
            $fetchProductVariant->execute([ // fetcha vse productVariante za posamezen id
                ":productid" => $productRow["id"],
            ]);
            $variants = array(); // definira variant array oz. ga zprazni.
            $i = 0;
            while ($variantRow = $fetchProductVariant->fetch()) // doda variant product noter v json
            {
                $variants[$i] = array(
                    "Color" => $variantRow["color"],
                    "Size" => $variantRow["size"],
                    "Stock" => $variantRow["stock"]
                );
                //var_dump($variants);
                $i++;
            }
            $tags = explode(",", $productRow["tags"]);
            $product =  array( // napolni associativno polje z vsemi podatki o prodoktu
                "Name" => $productRow["productName"],
                "Price" => $productRow["productPrice"],
                "Category" => $productRow["productCategory"],
                "Tags" => $tags,
                "variants" => $variants
            );
            echo json_encode($product);
            echo "\n"; // vrne json od associativnega polje
        }
        return true;
    }
}
