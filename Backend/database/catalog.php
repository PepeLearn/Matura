<?php
class catalog
{

    public function getCatalog($conn)
    { // WIP
        $sql = "SELECT p.ProductName, p.ProductPrice, p.ProductCategory, t.TagName FROM products p, tags t,tagToProduct tp WHERE p.id = tp.ProductID AND t.id = tp.TagID";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $i = 1;
            while ($row = mysqli_fetch_assoc($result)) {
                if ($i == 1)
                {
                    $row2 = $row;
                }
                if ($row2["ProductName"] == $row["ProductName"]) // preveri ce je originalni vnos enak novemu
                {
                    array_merge($row2, $row);
                    //$row2["TagName"] = array($row2["TagName"],$row["TagName"]); //doda tag v original vnos
                }
                else { // ce ni vrne json
                    echo json_encode($row2); // vrne vnos v json formatu
                    echo ("<br  >");
                    $row2 = $row;
                }
               
                $i++;
            }
        }
        echo json_encode($row2);
        return true;
    }
}
