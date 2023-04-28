import {Box, Icon, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";


//komponenta - top bar

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const ColorMode = useContext(ColorModeContext);

    //css lahko pisem direkt v box komponento (box je edina) lahko ga tudi krajsam npr padding - p {value}
    return (<Box display="flex" justifyContent="space-between" p={2}> 
        {/* Search bar*/}
        <Box 
            display="flex" 
            backgroundColor={colors.primary[400]} 
            borderRadius="3px"
            >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sy={{p: 1}}>
            <SearchIcon />
        </IconButton>
        </Box>

        {/* ostalle ikone*/}
        <Box display="flex">
            <IconButton onClick={ColorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? (
                    <DarkModeOutlinedIcon />
                ) : (
                    <LightModeOutlinedIcon />
                )
            }
            </IconButton>
            <IconButton>
                <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton>
                <SettingsOutlinedIcon />
            </IconButton>
            <IconButton>
                <PersonOutlinedIcon />  
            </IconButton>
        </Box>
    </Box>) 
}

export default Topbar;