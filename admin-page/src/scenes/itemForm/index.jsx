import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import Cookies from "js-cookie";

const ItemForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
    alert("submitted item");
    post(values);
  };
  const post = (data) => {
    fetch(
      "http://127.0.0.1/matura-backend/database/database.php?insertProduct=true",
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
      <Header title="Add Item" subtitle="Add item to the database" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Item Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Item Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Item Describtion"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Item Category"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.category}
                name="category"
                error={!!touched.category && !!errors.category}
                helperText={touched.category && errors.category}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Item Super Category"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.superCategory}
                name="superCategory"
                error={!!touched.superCategory && !!errors.superCategory}
                helperText={touched.superCategory && errors.superCategory}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Tags (seperate wih a comma (,))"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tags}
                name="tags"
                error={!!touched.tags && !!errors.tags}
                helperText={touched.tags && errors.tags}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" >
                <button type="submit"> Add Item</button>
                
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  price: yup.string().required("required"),
  description: yup.string().required("required"),
  category: yup.string().required("required"),
  superCategory: yup.string().required("required"),
  tags: yup.string().required("required"),
});
const initialValues = {
  name: "",
  price: "",
  description: "",
  category: "",
  superCategory: "",
  tags: "",
};

export default ItemForm;
