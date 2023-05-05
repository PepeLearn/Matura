import { useState } from "react";
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Menu, MenuItem } from 'react-pro-sidebar';
import { Box, Hidden, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import "../global/sidebar.css";
import { red } from "@mui/material/colors";

const Item = ({ title, to, icon, selected, setSelected }) => { //deklrean item
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    );
  };

//komponenta
const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed]=useState(false); //is collapsed = ce je sidebar collapsed al ne


    return (
        <Box
          width={isCollapsed ? "80px" : !isCollapsed ? "300px": undefined}
          height="100vh"
          display="flex"
          backgroundColor={colors.primary[400]}
          justifyContent="center"
          >
            <ProSidebarProvider 
            collapsed={isCollapsed}>
              <Menu iconShape="square"
                    width="10px"
              > 
                {/* Logo + menu ikona*/}
                <MenuItem
                onClick={() => setIsCollapsed(!isCollapsed)} //pove ko sidebar je collapsed
                icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
                style={{
                  margin: "10px 0px 10px 0px",
                  backgroundcolor: colors.grey[100],
                }}
                >
                {!isCollapsed && ( //ce ni collapsed se kaze to
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  width="100%"
                >
                  <Typography variant="h3" color={colors.grey[100]}>
                    ADMIN
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon/>
                  </IconButton>
                </Box>
                )}
                </MenuItem>
                {!isCollapsed && (
                <Box mb="25px">
                  <Box display="flex" justifyContent="center" alignItems="center" width="300px">
                    <img
                      alt="profile-user"
                      width="100px"
                      height="100px"
                      justifyContent="center"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png"
                      style={{ cursor: "pointer", borderRadius: "50%" }}
                    />
                  </Box>
                  <Box textAlign="center">
                    <Typography
                      variant="h2"
                      display="flex"
                      width="300px"
                      justifyContent="center"
                      color={colors.grey[100]}
                      fontWeight="bold"
                      sx={{ m: "10px 0 0 0" }}
                    >
                      Vaukman Mišel
                    </Typography>
                    <Typography variant="h5" color={colors.greenAccent[500]} width="300px" display="flex" justifyContent="center">
                      VP admin
                    </Typography>
                  </Box>
                </Box>
              )}
              <Box width={!isCollapsed ? undefined : "10px"} padding-left={!isCollapsed ? undefined : "10%"} marginLeft={isCollapsed ? undefined : "15%"}>
              <a href="/">
              <Item
                title="Dashboard"
                icon={<HomeOutlinedIcon />}
              />
            </a>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "0px 0 5px 20px" }}
            >
              Data
            </Typography>
            <a href="/team">
              <Item
                title="Manage Team"
                icon={<PeopleOutlinedIcon  />}
              />
            </a>
            <a href="/contacts">
              <Item
                title="Contacts information"
                icon={<ContactsOutlinedIcon  />}
              />
            </a>
            <a href="/invoices">
              <Item
                title="Products"
                icon={<ReceiptOutlinedIcon  />}
              />
            </a>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "0px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <a href="/form">
              <Item
                title="Item form"
                icon={<PersonOutlinedIcon  />}
              />
            </a>
            <a href="/calendar">
              <Item
                title="Canelndar"
                icon={<CalendarTodayOutlinedIcon  />}
              />
            </a>
            <a href="/faq">
              <Item
                title="FAQ Page"
                icon={<HelpOutlineOutlinedIcon />}
              />
            </a>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "0px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <a href="/bar">
              <Item
                title="Bar Chart"
                icon={<BarChartOutlinedIcon  />}
              />
            </a>
            <a href="/pie">
              <Item
                title="Pie Chart"
                icon={<PieChartOutlineOutlinedIcon  />}
              />
            </a>
          </Box>
              </Menu>
            </ProSidebarProvider>
        </Box>
      );
    };
    
    export default Sidebar;