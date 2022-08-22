import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { NavLink } from "react-router-dom";
import { Avatar, Slide, styled, useScrollTrigger } from "@mui/material";
import { alpha, InputBase } from "@mui/material";
import PropTypes from "prop-types";
import logo from "../assets/img/logo/hedspi-logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import DropdownMenu from "./DropdownMenu";
import Sidebar from "./Sidebar";
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

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.35),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.5),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
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
    padding: theme.spacing(1, 1, 0.8, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    width: "80%",
    [theme.breakpoints.up("sm")]: {
      width: "18ch",
      // "&:focus": {
      //   width: "22ch",
      // },
    },
  },
}));

export default function NavBar(props) {
  const [isLogin, setLogin] = React.useState(true);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HideOnScroll>
        <AppBar sx={{}}>
          <Toolbar
            sx={{
              display: "flex",
              backgroundColor: "#0C1A2D",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <Sidebar />
                <NavLink
                  className=" text-white font-medium rounded-md md:text-bxse lg:text-lg text-xs mx-1 p1-3"
                  to="/"
                >
                  <Avatar alt="" src={logo} />
                </NavLink>

                <NavLink
                  className="m-1  p-1 py-3 hidden sm:block text-white no-underline hover:underline font-medium rounded-md  md:text-xs lg:text-base text-xs md:p-1 md:m-2 lg:p-3"
                  to="/documents"
                >
                  <div className="p-3 px-1">Tài liệu</div>
                </NavLink>
                <NavLink
                  className="m-1  p-1 py-3 hidden sm:block text-white no-underline hover:underline font-medium rounded-md  md:text-xs lg:text-base text-xs md:p-1 md:m-2 lg:p-3"
                  to="/reviews"
                >
                  <div className="p-3 px-1">Review</div>
                </NavLink>
                <NavLink
                  className="m-1  p-1 py-3 hidden sm:block text-white no-underline hover:underline font-medium rounded-md  md:text-xs lg:text-base text-xs md:p-1 md:m-2 lg:p-3"
                  to="/questions"
                >
                  <div className="p-3 px-1">Q&A</div>
                </NavLink>
                <NavLink
                  className="m-1  p-1 py-3 hidden sm:block text-white no-underline hover:underline font-medium rounded-md  md:text-xs lg:text-base text-xs md:p-1 md:m-2 lg:p-3"
                  to="/documents/exams"
                >
                  <div className="p-3 px-1">Đề thi</div>
                </NavLink>
                <NavLink
                  className="m-1  p-1 py-3 hidden sm:block text-white no-underline hover:underline font-medium rounded-md  md:text-xs lg:text-base text-xs md:p-1 md:m-2 lg:p-3"
                  to="/about"
                >
                  <div className="p-3 px-1">About Us</div>
                </NavLink>
              </div>
              <div className="flex items-center pr-3">
                <Search
                  sx={{
                    justifySelf: "space-between",
                    display: { sm: "block" },
                  }}
                >
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                {isLogin ? (
                  <DropdownMenu />
                ) : (
                  <NavLink
                    className="flex items-center text-main hover:bg-slate-200 hover:rounded-lg p-2 "
                    to="/login"
                  >
                    <NotificationsNoneOutlinedIcon />
                    <span className="pl-2">Login</span>
                  </NavLink>
                )}
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>
  );
}
