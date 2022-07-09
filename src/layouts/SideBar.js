import { Badge, Divider, Drawer, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PolicyOutlinedIcon from "@mui/icons-material/PolicyOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LoginIcon from '@mui/icons-material/Login';
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import avatar from "../assets/img/anhthe.png";

const SideBar = () => {
  const [sw, setSwitch] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSwitch(!sw);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className="flex flex-col">
        <div className="p-8 pb-0 text-center flex items-center">
          <img alt="avatar" src={avatar} className=" rounded-full w-1/3 shadow-lg" />
          <div className="flex flex-col">
            <span className="p-2">HEDSPI K64</span>
            <span className="flex items-center px-3">
              <Badge>
                <AccountCircleIcon />
              </Badge>
              <span className="px-2 rounded-xl bg-red-500 text-slate-100">
                Admin
              </span>
            </span>
          </div>
        </div>
        <div className="p-3 pl-8">
          <span>Nguyễn Hoàng Anh</span>
        </div>
        <div className="p-3 pl-8    rounded-sm border-solid border hover:bg-blue-400 hover:text-white">
          <a href="/" className="flex items-center">
            <PersonOutlineIcon sx={{ mr: 2 }} /> Trang cá nhân
          </a>
        </div>
        <div className="p-3 pl-8    rounded-sm border-solid border hover:bg-blue-400 hover:text-white">
          <a href="/" className="flex items-center">
            <SettingsOutlinedIcon sx={{ mr: 2 }} /> Trang quản lý
          </a>
        </div>
        <div className="p-3 pl-8    rounded-sm border-solid border hover:bg-blue-400 hover:text-white">
          <a href="/" className="flex items-center">
            <PolicyOutlinedIcon sx={{ mr: 2 }} /> Privacy Policy
          </a>
        </div>
        {/* <div className="p-3 pl-8    rounded-sm border-solid border hover:bg-blue-400 hover:text-white">
          <a href="/" className="flex items-center">
            <LogoutOutlinedIcon sx={{ mr: 2 }} /> Logout
          </a>
        </div> */}
        <div className="p-3 pl-8    rounded-sm border-solid border hover:bg-blue-400 hover:text-white">
          <a href="/login" className="flex items-center">
            <LoginIcon sx={{ mr: 2 }} /> Login
          </a>
        </div>
      </div>
      <Divider />
    </Box>
  );

  return (
    <div className="hover:bg-slate-300 hover:text-slate-700 rounded-full">
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ m: 0 }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={sw} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};

export default SideBar;
