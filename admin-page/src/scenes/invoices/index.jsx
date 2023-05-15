import { Box, Typography, useTheme } from "@mui/material";
import { useGridApiRef } from "@mui/x-data-grid-pro";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useEffect, useState, useRef } from "react";
import Cookies from "js-cookie";
import { DataGrid } from "@mui/x-data-grid";

const Invoices = () => {
  const [products, setProducts] = useState([]);
  const theme = useTheme();
  const apiRef = useGridApiRef();
  const colors = tokens(theme.palette.mode);
  const [editedProducts, setEditedProducts] = useState([]);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "Name",
      headerName: "Item Name",
      flex: 1,
      cellClassName: "name-column--cell",
      editable: true,
    },
    {
      field: "Desc",
      headerName: "Item Description",
      flex: 1,
      editable: true,
    },
    {
      field: "Tags",
      headerName: "Item Tags",
      flex: 1,
      editable: true,
    },
    {
      field: "Price",
      headerName: "Item Price",
      flex: 1,
      editable: true,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          €{params.row.Price}
        </Typography>
      ),
    },
    {
      field: "TimeCreated",
      headerName: "Date",
      flex: 1,
    },
  ];

  useEffect(() => {
    fetch(
      "http://127.0.0.1/matura-backend/database/database.php?getProductCatalog=true"
    )
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element) => {
          element["id"] = element["ProductID"];
          delete element["ProductID"];
          element["editable"] = true;
        });
        setProducts(data);
      });
  }, []);

  useEffect(() => {
    console.log("Edited Products:", editedProducts);
  }, [editedProducts]);

  const handleCellEditCommit = (params) => {
    const updatedProducts = products.map((product) => {
      if (product.id === params.id) {
        return {
          ...product,
          [params.field]: params.value,
        };
      }
      return product;
    });

    const editedProduct = updatedProducts.find(
      (product) => product.id === params.id
    );

    if (editedProduct) {
      setEditedProducts((prevEditedProducts) => {
        const index = prevEditedProducts.findIndex(
          (product) => product.id === params.id
        );
        if (index !== -1) {
          const updatedEditedProducts = [...prevEditedProducts];
          updatedEditedProducts[index] = editedProduct;
          return updatedEditedProducts;
        }
        return [...prevEditedProducts, editedProduct];
      });
    } else {
      setEditedProducts((prevEditedProducts) =>
        prevEditedProducts.filter((product) => product.id !== params.id)
      );
    }

    setProducts(updatedProducts);
  };

  useEffect(() => {
    if (editedProducts.length > 0) {
      console.log("Edited Products:", editedProducts);
    }
  }, [editedProducts]);

  const handleSubmit = () => {
    console.log("Submitting changes...");
    post(editedProducts);
  };

  const post = (data) => {
    fetch(
      "http://127.0.0.1/matura-backend/database/database.php?updateProductsBatch=true",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: Cookies.get("authorization"),
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Updated successfully:", data);
      })
      .catch((error) => {
        console.log("Update failed:", error);
      });
  };

  return (
    <Box m="20px">
      <Header title="PRODUCTS" subtitle="List of products" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={products}
          columns={columns}
          apiRef={apiRef}
          onCellEditCommit={handleCellEditCommit}
        />
      </Box>
      <button onClick={handleSubmit}>Submit changes</button>
    </Box>
  );
};

export default Invoices;
