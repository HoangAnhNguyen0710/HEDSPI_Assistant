/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import {
  Avatar,
  Chip,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import avatar from "../assets/img/guest.png";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../services/api";
import { setUser } from "../slices/user";

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const user = useSelector((state) => state.user.value);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const LoginOrLogout = () => {
    const isLogin = localStorage.getItem("HEDSPI_ASSISTANCE_USER_TOKEN");
    if (isLogin === "") {
      navigate("/login");
    } else {
      // userLogin(isLogin).then().catch((err) => {
      //   alert("Phiên đăng nhập của bạn đã hết");
        
      // })
      localStorage.setItem("HEDSPI_ASSISTANCE_USER_TOKEN", "");
      location.reload();
    }
  };
  useEffect(() => {
    const credential = localStorage.getItem("HEDSPI_ASSISTANCE_USER_TOKEN");
    if (credential !== "") {
      userLogin(credential).then((res) => {
        console.log(res.data);
        dispatch(setUser(res.data));
      })
      .catch((err)=> {
        alert("Phiên đăng nhập của bạn đã hết");
        localStorage.setItem("HEDSPI_ASSISTANCE_USER_TOKEN", "");
        dispatch(setUser(null));
      });
    }
  }, []);

  return (
    <div className="">
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <span>
            <Avatar
              sx={{ width: 32, height: 32 }}
              src={user !== null ? user.picture : avatar}
            ></Avatar>
          </span>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar
            sx={{ width: 32, height: 32 }}
            src={user !== null ? user.picture : avatar}
          ></Avatar>{" "}
          <span className="px-3">{user !== null ? user.name : "Guest"}</span>
          <Chip label={user !== null ? user.role : "Guest"} color="secondary" />
        </MenuItem>
        {user !== null ? (
          
            <MenuItem>
              <AttachEmailOutlinedIcon />{" "}
              <span className="pl-3">{user.email}</span>
            </MenuItem>
         ) : (
          ""
        )}
        {user !== null ? (
            <MenuItem>
              <SellOutlinedIcon />{" "}
              <span className="px-3">
                {user.schoolyear !== null ? user.schoolyear : "Khóa: chưa cập nhật"}
              </span>
            </MenuItem>  
        ) : (
          ""
        )}
        <Divider />
        <MenuItem>
          <NavLink to="/create_docs" className="w-full">
            <div className="flex items-center">
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              <div className="w-full"> Thêm tài liệu</div>
            </div>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/create_docs" className="w-full">
            <div className="flex items-center">
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              <div className="w-full"> Cài đặt</div>
            </div>
          </NavLink>
        </MenuItem>
        <MenuItem>
          <div className="w-full" onClick={LoginOrLogout}>
            <div className="flex items-center">
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              <div className="w-full">{user !== null ? "Logout" : "Login"}</div>
            </div>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
