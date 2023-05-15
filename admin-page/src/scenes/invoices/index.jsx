import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridApi } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useGridApiRef } from "@mui/x-data-grid";
const Invoices = () => {
  const [products, setProducts] = useState([]);
  const theme = useTheme();
  const apiRef = useRef(null);
  const colors = tokens(theme.palette.mode);
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

  const handleSubmit = () => {
    const temp = [];
    const gridData = apiRef.current.getState().rows;
    const updatedProducts = [...products];

    gridData.forEach((element) => {
      const productIndex = element.data.id - 1;
      const updatedProduct = {
        ...updatedProducts[productIndex],
        ...element.data,
      };
      delete updatedProduct._action;
      temp.push(updatedProduct);
    });

    // Use the temp array as needed
    console.log(temp);

    // Send the temp array to the server or perform any other operations
    post(temp);
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
        console.log("updated successfully");
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
        />
      </Box>
      <button onClick={handleSubmit}>Submit changes</button>
    </Box>
  );
};

export default Invoices;
