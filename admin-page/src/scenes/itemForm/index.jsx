import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const ItemForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
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
                value={values.ItemName}
                name="ItemName"
                error={!!touched.ItemName && !!errors.ItemName}
                helperText={touched.ItemName && errors.ItemName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Item Cost"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ItemCost}
                name="ItemCost"
                error={!!touched.ItemCost && !!errors.ItemCost}
                helperText={touched.ItemCost && errors.ItemCost}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Item Describtion"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ItemDesc}
                name="ItemDesc"
                error={!!touched.ItemDesc && !!errors.ItemDesc}
                helperText={touched.ItemDesc && errors.ItemDesc}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Item Quantity"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ItemQuantity}
                name="ItemQuantity"
                error={!!touched.ItemQuantity && !!errors.ItemQuantity}
                helperText={touched.ItemQuantity && errors.ItemQuantity}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Tag 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Tag1}
                name="Tag1"
                error={!!touched.Tag1 && !!errors.Tag1}
                helperText={touched.Tag1 && errors.Tag1}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Tag 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Tag2}
                name="Tag2"
                error={!!touched.Tag2 && !!errors.Tag2}
                helperText={touched.Tag2 && errors.Tag2}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Tag 3"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="Tag3"
                error={!!touched.Tag3 && !!errors.Tag3}
                helperText={touched.Tag3 && errors.Tag3}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add Item
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  ItemName: yup.string().required("required"),
  ItemCost: yup.string().required("required"),
  ItemDesc: yup.string().required("required"),
  ItemQuantity: yup.string().required("required"),
  contact: yup.string().required("required"),
  Tag1: yup.string().required("required"),
  Tag2: yup.string().required("required"),
  Tag3: yup.string().required("required"),
  Tag4: yup.string().required("required"),
});
const initialValues = {
  ItemName: "",
  ItemCost: "",
  ItemDesc: "",
  ItemQuantity: "",
  Tag1: "",
  Tag2: "",
  Tag3: "",
};

export default ItemForm;
