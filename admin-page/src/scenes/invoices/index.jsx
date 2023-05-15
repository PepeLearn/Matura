import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridApi } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useGridApiRef} from "@mui/x-data-grid";
const Invoices = () => {
  const [products, setProducts] = useState([]);
  const theme = useTheme();
  const apiRef = useGridApiRef();
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
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => {
        data.forEach(element => {
          element['id'] = element['ProductID']
          delete element["ProductID"];
          element['editable'] = true;
        });
        setProducts(data)
      });
  }, []);

  const handleSumbit = () => {
   let temp = [];
   console.log(apiRef.current.state);
    let gridData = apiRef.current.state;
    let i = 0;
    gridData.forEach(element => {

      if (!JSON.stringify(element) === JSON.stringify(products[i])) {
        temp.push(element);
      }
      i++;
      post(temp)
    });
  } 
  const post = (data) => {
    fetch(
      "http://127.0.0.1/matura-backend/database/database.php?updateProductsBatch=true", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        Authorization: Cookies.get("authorization"),
      },
      body: data, 
    }).then((response) => response.json())
      .then((data) => {
        console.log("updated succesfully")
      })
  }
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
        <DataGrid checkboxSelection rows={products} columns={columns}  apiRef={apiRef} />
      </Box>
      <button onClick={handleSumbit}>Submit changes</button>
    </Box>
   
  );
};

export default Invoices;