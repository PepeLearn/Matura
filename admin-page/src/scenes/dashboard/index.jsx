import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import { useState,useEffect} from "react";
import Cookies from "js-cookie";

const Dashboard = () => {
  const [products,setProducts] = useState(2);
  const [reviews,setReviews] = useState(2);
  const [users,setUsers] = useState(2);
  const [transactions,setTransactions] = useState(0);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

 useEffect(() => {
    fetch(
      "http://127.0.0.1/matura-backend/database/database.php?getDashboard=true",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          Authorization: Cookies.get("authorization"),
        },
      }
    )
      .then((data) => data.json())
      .then((data) => {
        setProducts(data.total_products);
        setReviews(data.total_reviews);
        setUsers(data.total_users);
        setTransactions(data.total.transactions);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={products}
            subtitle="Total products"
            progress="0.75"
            increase="+14%"
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {reviews}
          <StatBox
            
            subtitle="Total reviews"

          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={users}
            subtitle="Total users"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={transactions}
            subtitle="Transakcije"
          />
        </Box>  
      </Box>
    </Box>
  );
};

export default Dashboard;