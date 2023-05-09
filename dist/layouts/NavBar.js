"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var AppBar_1 = __importDefault(require("@mui/material/AppBar"));
var Box_1 = __importDefault(require("@mui/material/Box"));
var Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
var react_router_dom_1 = require("react-router-dom");
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var prop_types_1 = __importDefault(require("prop-types"));
var Search_1 = __importDefault(require("@mui/icons-material/Search"));
var DropdownMenu_1 = __importDefault(require("./DropdownMenu"));
var Sidebar_1 = __importDefault(require("./Sidebar"));
var logo = require("../assets/img/logo/hedspi-logo.jpg");
function HideOnScroll(props) {
    var children = props.children, window = props.window;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    var trigger = (0, material_1.useScrollTrigger)({
        target: window ? window() : undefined,
    });
    return (React.createElement(material_1.Slide, { appear: false, direction: "down", in: !trigger }, children));
}
HideOnScroll.propTypes = {
    children: prop_types_1.default.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: prop_types_1.default.func,
};
var Search = (0, material_1.styled)("div")(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            position: "relative",
            borderRadius: theme.shape.borderRadius,
            backgroundColor: (0, material_2.alpha)(theme.palette.common.white, 0.35),
            "&:hover": {
                backgroundColor: (0, material_2.alpha)(theme.palette.common.white, 0.5),
            },
            marginLeft: 0,
            width: "100%"
        },
        _b[theme.breakpoints.up("sm")] = {
            marginLeft: theme.spacing(1),
            width: "auto",
        },
        _b);
});
var SearchIconWrapper = (0, material_1.styled)("div")(function (_a) {
    var theme = _a.theme;
    return ({
        padding: theme.spacing(0, 1),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    });
});
var StyledInputBase = (0, material_1.styled)(material_2.InputBase)(function (_a) {
    var _b;
    var theme = _a.theme;
    return ({
        color: "inherit",
        "& .MuiInputBase-input": (_b = {
                padding: theme.spacing(1, 1, 0.8, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: "calc(1em + ".concat(theme.spacing(3), ")"),
                transition: theme.transitions.create("width"),
                width: "80%"
            },
            _b[theme.breakpoints.up("sm")] = {
                width: "18ch",
                // "&:focus": {
                //   width: "22ch",
                // },
            },
            _b),
    });
});
function NavBar(props) {
    return (React.createElement(Box_1.default, { sx: { flexGrow: 1 } },
        React.createElement(HideOnScroll, null,
            React.createElement(AppBar_1.default, { sx: {} },
                React.createElement(Toolbar_1.default, { sx: {
                        display: "flex",
                        backgroundColor: "#0C1A2D",
                        alignItems: "center",
                        justifyContent: "space-between",
                    } },
                    React.createElement("div", { className: "flex items-center justify-between w-full" },
                        React.createElement("div", { className: "flex items-center" },
                            React.createElement(Sidebar_1.default, null),
                            React.createElement(react_router_dom_1.NavLink, { className: " text-white font-medium rounded-md md:text-bxse lg:text-lg text-xs ml-1 mr-3 p1-3", to: "/" },
                                React.createElement(material_1.Avatar, { alt: "", src: logo })),
                            React.createElement(react_router_dom_1.NavLink, { className: "m-1  p-1 py-3 hidden sm:block text-white no-underline hover:underline font-medium rounded-md  md:text-xs lg:text-base text-xs md:p-1 md:m-2 lg:p-3", to: "/documents" },
                                React.createElement("div", { className: "p-1 px-1" }, "T\u00E0i li\u1EC7u")),
                            React.createElement(react_router_dom_1.NavLink, { className: "m-1  p-1 py-3 hidden sm:block text-white no-underline hover:underline font-medium rounded-md  md:text-xs lg:text-base text-xs md:p-1 md:m-2 lg:p-3", to: "/reviews" },
                                React.createElement("div", { className: "p-1 px-1" }, "Review")),
                            React.createElement(react_router_dom_1.NavLink, { className: "m-1  p-1 py-3 hidden sm:block text-white no-underline hover:underline font-medium rounded-md  md:text-xs lg:text-base text-xs md:p-1 md:m-2 lg:p-3", to: "/questions" },
                                React.createElement("div", { className: "p-1 px-1" }, "Q&A")),
                            React.createElement(react_router_dom_1.NavLink, { className: "m-1  p-1 py-3 hidden sm:block text-white no-underline hover:underline font-medium rounded-md  md:text-xs lg:text-base text-xs md:p-1 md:m-2 lg:p-3", to: "/documents/exams" },
                                React.createElement("div", { className: "p-1 px-1" }, "\u0110\u1EC1 thi")),
                            React.createElement(react_router_dom_1.NavLink, { className: "m-1  p-1 py-3 hidden sm:block text-white no-underline hover:underline font-medium rounded-md  md:text-xs lg:text-base text-xs md:p-1 md:m-2 lg:p-3", to: "/about" },
                                React.createElement("div", { className: "p-1 px-1" }, "About Us"))),
                        React.createElement("div", { className: "flex items-center pr-3" },
                            React.createElement("form", { action: "/search_result" },
                                React.createElement(Search, { sx: {
                                        justifySelf: "space-between",
                                        display: { sm: "block" },
                                    } },
                                    React.createElement(SearchIconWrapper, null,
                                        React.createElement(Search_1.default, null)),
                                    React.createElement(StyledInputBase, { placeholder: "Search\u2026", inputProps: { "aria-label": "search" }, name: "document" }))),
                            React.createElement(DropdownMenu_1.default, null))))))));
}
exports.default = NavBar;
