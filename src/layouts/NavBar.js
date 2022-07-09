import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import { Slide, useScrollTrigger } from "@mui/material";
import PropTypes from 'prop-types';
import SideBar from "./SideBar";
// import logo from "../assets/img/logo/hedspi-logo.jpg";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function NavBar(props) {
  return (

    <Box sx={{ flexGrow: 1 }}>
      <HideOnScroll>
      <AppBar>
        <Toolbar sx={{display: "flex", backgroundColor: "#0099FF", alignItems: "center", justifyContent: "space-between"}}>
        <div className="flex items-center">
          <SideBar/>
          <NavLink className="m-1  p-1 py-3 block text-white hover:bg-gray-300 hover:text-slate-800 font-medium rounded-md md:text-lg text-xs md:p-3 md:m-2" to="/">
            <span className="p-3 px-1">Trang chủ</span>
            
          </NavLink>
          <NavLink className="m-1  p-1 py-3 block text-white hover:bg-gray-300 hover:text-slate-800 font-medium rounded-md md:text-lg text-xs md:p-3 md:m-2" to="/documents">
            <span className="p-3 px-1">Tài liệu</span>
            
          </NavLink>
          <NavLink className="m-1  p-1 py-3 block text-white hover:bg-gray-300 hover:text-slate-800 font-medium rounded-md md:text-lg text-xs md:p-3 md:m-2" to="/blogs">
            <span className="p-3 px-1">Blog</span>
            
          </NavLink>
          <NavLink className="m-1  p-1 py-3 block text-white hover:bg-gray-300 hover:text-slate-800 font-medium rounded-md md:text-lg text-xs md:p-3 md:m-2" to="/about">
            <span className="p-3 px-1">About Us</span>
            
          </NavLink>
        </div>
        <div className="hover:bg-slate-300 hover:text-slate-700 rounded-md">
          <Search sx={{ justifySelf: "space-between", display:{xs: "none", sm:"block"}}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
    </Box>
  
  );
}
