import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { MutatingDots } from "react-loader-spinner";
import { alpha, styled, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

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
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
      // "&:focus": {
      //   width: "22ch",
      // },
    },
  },
}));

const PageLayout = (props) => {
  //loader 1s
  const [loader, setLoader] = useState(true);
  const [isLogin, setLogin] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className="flex">
        <div className="w-full font-sans">
          <NavBar />
          <div className="py-12 box-border"></div>
          <div className="flex justify-between mx-10">
            <div className="hover:bg-slate-100 hover:text-slate-700 rounded-md border-2">
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
            </div>
            {isLogin ? (
              <DropdownMenu/>
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
          {loader ? (
            <div
              id="preloader"
              className="w-full bg-white h-full fixed top-0 right-0 bottom-0 left-0 z-20 flex items-center justify-center"
            >
              <MutatingDots color="#06b6d4" height={80} width={80} />
            </div>
          ) : (
            props.page
          )}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PageLayout;
