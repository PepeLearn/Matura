import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useEffect, useState, useRef } from "react";
import Cookies from "js-cookie";
import { DataGrid, useGridApiContext, useGridApiRef } from "@mui/x-data-grid";
const Invoices = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
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
      field: "Category",
      headerName: "Category",
      flex: 1,
      cellClassName: "name-column--cell",
      editable: true,
    },
    {
      field: "SuperCategory",
      headerName: "Super category",
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
      type: "number",
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
          element.Tags = String(element.Tags);
        });
        setProducts(data);
      });
  }, []);

  const processRowUpdate = (newRow, oldRow) => {
    const updatedRow = { ...newRow, isNew: false };
    console.log(updatedRow);
    let temp = editedProducts;
    let same = false;
    const updatedProducts = temp.map((c, i) => {
      if (c.id == updatedRow.id) {
        // Increment the clicked counter
        console.log(oldRow, c);
        console.log(c.id, updatedRow.id);
        console.log("returned updated row");
        same = true;
        return { ...updatedRow, tags: updatedRow.tags };
      } else {
        // The rest haven't changed
        console.log(oldRow, c);
        return c;
      }
    });
    if (!same) {
      console.log("ni isti produkt");
      console.log([...editedProducts, updatedRow]);
      setEditedProducts([...editedProducts, updatedRow]);
    } else {
      console.log("je isti produkt");
      console.log(updatedProducts);
      setEditedProducts((updatedProducts) => [...updatedProducts]);
    }

    //handle send data to api
    return updatedRow;
  };
  const onRowsSelectionHandler = (ids) => {
    console.log(ids);
    setSelectedProducts(ids);
  };
  const handleSubmitUpdate = () => {
    console.log("Submitting changes...");
    postUpdate(editedProducts);
  };
  const handleSubmitDelete = () => {
    console.log("Submitting changes...");
    postDelete(selectedProducts);
  };

  const postUpdate = (data) => {
    fetch(
      "http://127.0.0.1/matura-backend/database/database.php?updateProductBatch=true",
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
  const postDelete = (data) => {
    data = { id: data };
    fetch(
      "http://127.0.0.1/matura-backend/database/database.php?deleteProduct=true",
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
      <div className="flex justify-items-end justify-end mr-5">
        <button
          className="ml-5 mr"
          color="secondary"
          variant="contained"
          onClick={handleSubmitUpdate}
        >
          Update changed products
        </button>
        <button
          className="ml-5 mr-5"
          color="secondary"
          variant="contained"
          onClick={handleSubmitDelete}
        >
          Delete selected products
        </button>
      </div>

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
          processRowUpdate={processRowUpdate}
          onRowSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
