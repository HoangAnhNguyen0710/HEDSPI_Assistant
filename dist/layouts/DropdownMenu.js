"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
var material_1 = require("@mui/material");
var SellOutlined_1 = __importDefault(require("@mui/icons-material/SellOutlined"));
var AttachEmailOutlined_1 = __importDefault(require("@mui/icons-material/AttachEmailOutlined"));
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var PersonAdd_1 = __importDefault(require("@mui/icons-material/PersonAdd"));
var Settings_1 = __importDefault(require("@mui/icons-material/Settings"));
var Logout_1 = __importDefault(require("@mui/icons-material/Logout"));
var react_redux_1 = require("react-redux");
var api_1 = require("../services/api");
var user_1 = require("../slices/user");
var react_2 = __importDefault(require("react"));
var avatar = require("../assets/img/guest.png");
var DropdownMenu = function () {
    var _a = (0, react_1.useState)(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var user = (0, react_redux_1.useSelector)(function (state) { return state.user.value; });
    var open = Boolean(anchorEl);
    var dispatch = (0, react_redux_1.useDispatch)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var LoginOrLogout = function () {
        var isLogin = localStorage.getItem("HEDSPI_ASSISTANCE_USER_TOKEN");
        if (isLogin === "") {
            navigate("/login");
        }
        else {
            // userLogin(isLogin).then().catch((err) => {
            //   alert("Phiên đăng nhập của bạn đã hết");
            // })
            localStorage.setItem("HEDSPI_ASSISTANCE_USER_TOKEN", "");
            location.reload();
        }
    };
    (0, react_1.useEffect)(function () {
        var credential = localStorage.getItem("HEDSPI_ASSISTANCE_USER_TOKEN");
        if (credential !== "") {
            (0, api_1.userLogin)(credential).then(function (res) {
                console.log(res.data);
                dispatch((0, user_1.setUser)(res.data));
            })
                .catch(function (err) {
                alert("Phiên đăng nhập của bạn đã hết");
                localStorage.setItem("HEDSPI_ASSISTANCE_USER_TOKEN", "");
                dispatch((0, user_1.setUser)(null));
            });
        }
    }, []);
    return (react_2.default.createElement("div", { className: "" },
        react_2.default.createElement(material_1.Tooltip, { title: "Account settings" },
            react_2.default.createElement(material_1.IconButton, { onClick: handleClick, size: "small", sx: { ml: 2 }, "aria-controls": open ? "account-menu" : undefined, "aria-haspopup": "true", "aria-expanded": open ? "true" : undefined },
                react_2.default.createElement("span", null,
                    react_2.default.createElement(material_1.Avatar, { sx: { width: 32, height: 32 }, src: user !== null ? user.picture : avatar })))),
        react_2.default.createElement(material_1.Menu, { anchorEl: anchorEl, id: "account-menu", open: open, onClose: handleClose, onClick: handleClose, PaperProps: {
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
            }, transformOrigin: { horizontal: "right", vertical: "top" }, anchorOrigin: { horizontal: "right", vertical: "bottom" } },
            react_2.default.createElement(material_1.MenuItem, null,
                react_2.default.createElement(material_1.Avatar, { sx: { width: 32, height: 32 }, src: user !== null ? user.picture : avatar }),
                " ",
                react_2.default.createElement("span", { className: "px-3" }, user !== null ? user.name : "Guest"),
                react_2.default.createElement(material_1.Chip, { label: user !== null ? user.role : "Guest", color: "secondary" })),
            user !== null ? (react_2.default.createElement(material_1.MenuItem, null,
                react_2.default.createElement(AttachEmailOutlined_1.default, null),
                " ",
                react_2.default.createElement("span", { className: "pl-3" }, user.email))) : (""),
            user !== null ? (react_2.default.createElement(material_1.MenuItem, null,
                react_2.default.createElement(SellOutlined_1.default, null),
                " ",
                react_2.default.createElement("span", { className: "px-3" }, user.schoolyear !== null ? user.schoolyear : "Khóa: chưa cập nhật"))) : (""),
            react_2.default.createElement(material_1.Divider, null),
            react_2.default.createElement(material_1.MenuItem, null,
                react_2.default.createElement(react_router_dom_1.NavLink, { to: "/create_docs", className: "w-full" },
                    react_2.default.createElement("div", { className: "flex items-center" },
                        react_2.default.createElement(material_1.ListItemIcon, null,
                            react_2.default.createElement(PersonAdd_1.default, { fontSize: "small" })),
                        react_2.default.createElement("div", { className: "w-full" }, " Th\u00EAm t\u00E0i li\u1EC7u")))),
            react_2.default.createElement(material_1.MenuItem, null,
                react_2.default.createElement(react_router_dom_1.NavLink, { to: "/create_docs", className: "w-full" },
                    react_2.default.createElement("div", { className: "flex items-center" },
                        react_2.default.createElement(material_1.ListItemIcon, null,
                            react_2.default.createElement(Settings_1.default, { fontSize: "small" })),
                        react_2.default.createElement("div", { className: "w-full" }, " C\u00E0i \u0111\u1EB7t")))),
            react_2.default.createElement(material_1.MenuItem, null,
                react_2.default.createElement("div", { className: "w-full", onClick: LoginOrLogout },
                    react_2.default.createElement("div", { className: "flex items-center" },
                        react_2.default.createElement(material_1.ListItemIcon, null,
                            react_2.default.createElement(Logout_1.default, { fontSize: "small" })),
                        react_2.default.createElement("div", { className: "w-full" }, user !== null ? "Logout" : "Login")))))));
};
exports.default = DropdownMenu;
