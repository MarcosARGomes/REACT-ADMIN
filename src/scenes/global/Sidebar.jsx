import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
// import 'react-pro-sidebar/dist/css/styles.css'
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import ContactsIcon from "@mui/icons-material/Contacts";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HelpIcon from "@mui/icons-material/Help";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import MenuIcon from "@mui/icons-material/Menu";
import MapIcon from "@mui/icons-material/Map";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false); //Variavel para dizer se o menu está aberto ou fechado
  const [selected, setSelected] = useState("Dashboard"); //Varialvel que irá indicar a página selecioanada

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`
        },
        "& .pro-icon-wrapper":{
            backgroundColor:"trasparent !important"
        },
        "& .pro-inner-item":{
            padding:"5px 35px 5px 20px !important"
        },
        "& .pro-inner-item:hover":{
            color:"#868dfb !important"
        },
        "& .pro-menu-item.active": {
            color: "#6870fa !important"
        },
      }}
    ></Box>
  );
};
export default Sidebar;
