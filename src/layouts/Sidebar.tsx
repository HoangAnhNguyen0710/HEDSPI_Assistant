import { Box, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const Sidebar = () => {
  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer(!drawer);
  };

  const list = (anchor: any) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "#0C1A2D",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div className="flex flex-col p-6 bg-main">
        <NavLink
          className="m-1   no-underline hover:bg-slate-600 font-medium rounded-md text-base text-white flex items-center"
          to="/"
        >
          <HomeOutlinedIcon /> <span className="p-3 px-1">Trang chủ</span>
        </NavLink>
        <NavLink
          className="m-1   no-underline hover:bg-slate-600 font-medium rounded-md text-base text-white flex items-center"
          to="/documents"
        >
          <FolderOutlinedIcon /> <span className="p-3 px-1">Tài liệu</span>
        </NavLink>
        <NavLink
          className="m-1   no-underline hover:bg-slate-600 font-medium rounded-md text-base text-white flex items-center"
          to="/reviews"
        >
          <ChatBubbleOutlineOutlinedIcon />{" "}
          <span className="p-3 px-1">Review</span>
        </NavLink>
        <NavLink
          className="m-1   no-underline hover:bg-slate-600 font-medium rounded-md text-base text-white flex items-center"
          to="/questions"
        >
          <HelpOutlineOutlinedIcon /> <span className="p-3 px-1">Q&A</span>
        </NavLink>
        <NavLink
          className="m-1   no-underline hover:bg-slate-600 font-medium rounded-md text-base text-white flex items-center"
          to="/documents/exams"
        >
          <FolderOutlinedIcon /> <span className="p-3 px-1">Đề thi</span>
        </NavLink>
        <NavLink
          className="m-1   no-underline hover:bg-slate-600 font-medium rounded-md text-base text-white flex items-center"
          to="/about"
        >
          <InfoOutlinedIcon /> <span className="p-3 px-1">About Us</span>
        </NavLink>
      </div>
    </Box>
  );

  return (
    <>
      <button
        className="cursor-pointer m-1  p-1 py-3  sm:hidden text-white no-underline hover:underline font-medium rounded-md md:text-base lg:text-lg text-xs md:p-3 md:m-2 flex items-center"
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </button>
      <Drawer anchor="left" open={drawer} onClose={toggleDrawer}>
        {list("left")}
      </Drawer>
    </>
  );
};

export default Sidebar;
