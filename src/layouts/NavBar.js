import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import { Avatar, Menu, MenuItem, Slide, useScrollTrigger } from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import PropTypes from "prop-types";
import SideBar from "./SideBar";
import logo from "../assets/img/logo/hedspi-logo.jpg";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
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
        <AppBar sx={{}}>
          <Toolbar
            sx={{
              display: "flex",
              backgroundColor: "#311B92",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="flex items-center">
              <SideBar />
              <NavLink
                className=" text-white hover:bg-gray-300 hover:text-slate-800 font-medium rounded-md md:text-base lg:text-lg text-xs mx-1 px-3"
                to="/"
              >
                <Avatar alt="" src={logo} />
              </NavLink>
              <NavLink
                className="m-1  p-1 py-3 block text-white hover:bg-gray-300 hover:text-slate-800 font-medium rounded-md md:text-base lg:text-lg text-xs md:p-3 md:m-2"
                to="/"
              >
                <span className="p-3 px-1">Trang chủ</span>
              </NavLink>
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <div>
                    <span
                      {...bindTrigger(popupState)}
                      className="cursor-pointer m-1  p-1 py-3  sm:hidden text-white hover:bg-gray-300 hover:text-slate-800 font-medium rounded-md md:text-base lg:text-lg text-xs md:p-3 md:m-2 flex items-center"
                    >
                      Menu
                      <ExpandMoreOutlinedIcon />
                    </span>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem>
                        <NavLink to="/documents">Tài liệu</NavLink>
                      </MenuItem>
                      <MenuItem>
                        <NavLink to="/questions">Q&A</NavLink>
                      </MenuItem>
                      <MenuItem>
                        <NavLink to="/reviews">Review</NavLink>
                      </MenuItem>
                      <MenuItem>
                        <NavLink to="/about">About Us</NavLink>
                      </MenuItem>
                    </Menu>
                  </div>
                )}
              </PopupState>
              <NavLink
                className="m-1  p-1 py-3 hidden sm:block text-white hover:bg-gray-300 hover:text-slate-800 font-medium rounded-md md:text-base lg:text-lg text-xs md:p-3 md:m-2"
                to="/documents"
              >
                <span className="p-3 px-1">Tài liệu</span>
              </NavLink>
              <NavLink
                className="m-1  p-1 py-3 hidden sm:block text-white hover:bg-gray-300 hover:text-slate-800 font-medium rounded-md md:text-base lg:text-lg text-xs md:p-3 md:m-2"
                to="/reviews"
              >
                <span className="p-3 px-1">Review</span>
              </NavLink>
              <NavLink
                className="m-1  p-1 py-3 hidden sm:block text-white hover:bg-gray-300 hover:text-slate-800 font-medium rounded-md md:text-base lg:text-lg text-xs md:p-3 md:m-2"
                to="/questions"
              >
                <span className="p-3 px-1">Q&A</span>
              </NavLink>
              <NavLink
                className="m-1  p-1 py-3 hidden sm:block text-white hover:bg-gray-300 hover:text-slate-800 font-medium rounded-md md:text-base lg:text-lg text-xs md:p-3 md:m-2"
                to="/documents/exams"
              >
                <span className="p-3 px-1">Đề thi</span>
              </NavLink>
              <NavLink
                className="m-1  p-1 py-3 hidden sm:block text-white hover:bg-gray-300 hover:text-slate-800 font-medium rounded-md md:text-base lg:text-lg text-xs md:p-3 md:m-2"
                to="/about"
              >
                <span className="p-3 px-1">About Us</span>
              </NavLink>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>
  );
}
