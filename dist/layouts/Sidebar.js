"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var Menu_1 = __importDefault(require("@mui/icons-material/Menu"));
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var HomeOutlined_1 = __importDefault(require("@mui/icons-material/HomeOutlined"));
var FolderOutlined_1 = __importDefault(require("@mui/icons-material/FolderOutlined"));
var ChatBubbleOutlineOutlined_1 = __importDefault(require("@mui/icons-material/ChatBubbleOutlineOutlined"));
var HelpOutlineOutlined_1 = __importDefault(require("@mui/icons-material/HelpOutlineOutlined"));
var InfoOutlined_1 = __importDefault(require("@mui/icons-material/InfoOutlined"));
var Sidebar = function () {
    var _a = react_1.default.useState(false), drawer = _a[0], setDrawer = _a[1];
    var toggleDrawer = function (event) {
        if (event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setDrawer(!drawer);
    };
    var list = function (anchor) { return (react_1.default.createElement(material_1.Box, { sx: {
            width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
            backgroundColor: "#0C1A2D",
            height: "100%",
        }, role: "presentation", onClick: toggleDrawer, onKeyDown: toggleDrawer },
        react_1.default.createElement("div", { className: "flex flex-col p-6 bg-main" },
            react_1.default.createElement(react_router_dom_1.NavLink, { className: "m-1   no-underline hover:bg-slate-600 font-medium rounded-md text-base text-white flex items-center", to: "/" },
                react_1.default.createElement(HomeOutlined_1.default, null),
                " ",
                react_1.default.createElement("span", { className: "p-3 px-1" }, "Trang ch\u1EE7")),
            react_1.default.createElement(react_router_dom_1.NavLink, { className: "m-1   no-underline hover:bg-slate-600 font-medium rounded-md text-base text-white flex items-center", to: "/documents" },
                react_1.default.createElement(FolderOutlined_1.default, null),
                " ",
                react_1.default.createElement("span", { className: "p-3 px-1" }, "T\u00E0i li\u1EC7u")),
            react_1.default.createElement(react_router_dom_1.NavLink, { className: "m-1   no-underline hover:bg-slate-600 font-medium rounded-md text-base text-white flex items-center", to: "/reviews" },
                react_1.default.createElement(ChatBubbleOutlineOutlined_1.default, null),
                " ",
                react_1.default.createElement("span", { className: "p-3 px-1" }, "Review")),
            react_1.default.createElement(react_router_dom_1.NavLink, { className: "m-1   no-underline hover:bg-slate-600 font-medium rounded-md text-base text-white flex items-center", to: "/questions" },
                react_1.default.createElement(HelpOutlineOutlined_1.default, null),
                " ",
                react_1.default.createElement("span", { className: "p-3 px-1" }, "Q&A")),
            react_1.default.createElement(react_router_dom_1.NavLink, { className: "m-1   no-underline hover:bg-slate-600 font-medium rounded-md text-base text-white flex items-center", to: "/documents/exams" },
                react_1.default.createElement(FolderOutlined_1.default, null),
                " ",
                react_1.default.createElement("span", { className: "p-3 px-1" }, "\u0110\u1EC1 thi")),
            react_1.default.createElement(react_router_dom_1.NavLink, { className: "m-1   no-underline hover:bg-slate-600 font-medium rounded-md text-base text-white flex items-center", to: "/about" },
                react_1.default.createElement(InfoOutlined_1.default, null),
                " ",
                react_1.default.createElement("span", { className: "p-3 px-1" }, "About Us"))))); };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("button", { className: "cursor-pointer m-1  p-1 py-3  sm:hidden text-white no-underline hover:underline font-medium rounded-md md:text-base lg:text-lg text-xs md:p-3 md:m-2 flex items-center", onClick: toggleDrawer },
            react_1.default.createElement(Menu_1.default, null)),
        react_1.default.createElement(material_1.Drawer, { anchor: "left", open: drawer, onClose: toggleDrawer }, list("left"))));
};
exports.default = Sidebar;
