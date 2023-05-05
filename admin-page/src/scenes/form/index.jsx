import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE ITEM" subtitle="Create a new item" />

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
                label="Item name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Item_name}
                name="Item_name"
                error={!!touched.Item_name && !!errors.Item_name}
                helperText={touched.Item_name && errors.Item_name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Item cost"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Item_cost}
                name="Item_cost"
                error={!!touched.Item_cost && !!errors.Item_cost}
                helperText={touched.Item_cost && errors.Item_cost}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Item desctibtion"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Item_desc}
                name="Item_desc"
                error={!!touched.Item_desc && !!errors.Item_desc}
                helperText={touched.Item_desc && errors.Item_desc}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Tag 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Item_tag1}
                name="Item_tag1"
                error={!!touched.Item_tag1 && !!errors.Item_tag1}
                helperText={touched.Item_tag1 && errors.Item_tag1}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Tag 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Item_tag2}
                name="Item_tag2"
                error={!!touched.Item_tag2 && !!errors.Item_tag2}
                helperText={touched.Item_tag2 && errors.Item_tag2}
                sx={{ gridColumn: "span 2" }}
              />
            <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Tag 3"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Item_tag3}
                name="Item_tag3"
                error={!!touched.Item_tag3 && !!errors.Item_tag3}
                helperText={touched.Item_tag3 && errors.Item_tag3}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Tag 4"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.Item_tag4}
              name="Item_tag4"
              error={!!touched.Item_tag4 && !!errors.Item_tag4}
              helperText={touched.Item_tag4 && errors.Item_tag4}
              sx={{ gridColumn: "span 2" }}
            />            
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Item
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  Item_name: yup.string().required("required"),
  Item_cost: yup.string().required("required"),
  Item_desc: yup.string().required("required"),
  Item_tag1: yup.string().required("required"),
  Item_tag2: yup.string().required("required"),
  Item_tag3: yup.string().required("required"),
  Item_tag4: yup.string().required("required"),
});
const initialValues = {
  Item_name: "",
  Item_cost: "",
  Item_desc: "",
  Item_tag1: "",
  Item_tag2: "",
  Item_tag3: "",
  Item_tag4: "",
};



export default Form;