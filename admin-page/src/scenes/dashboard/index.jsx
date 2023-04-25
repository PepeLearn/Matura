import { Box } from "@mui/material";
import Header from "../../components/Header";

//komponenta - dashboard - celi board
const Dashboard = () => {
    return (
        <Box m="20px" order={3}>
            <Box  alignItems="center"> 
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard"/>
            </Box>
        </Box>
    )
}

export default Dashboard;