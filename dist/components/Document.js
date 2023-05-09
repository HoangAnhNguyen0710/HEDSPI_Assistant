"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var SchoolOutlined_1 = __importDefault(require("@mui/icons-material/SchoolOutlined"));
var ComputerOutlined_1 = __importDefault(require("@mui/icons-material/ComputerOutlined"));
var MoreVert_1 = __importDefault(require("@mui/icons-material/MoreVert"));
var material_1 = require("@mui/material");
var Favorite_1 = __importDefault(require("@mui/icons-material/Favorite"));
var moment_1 = __importDefault(require("moment"));
var react_router_dom_1 = require("react-router-dom");
var ChatBubbleOutlineOutlined_1 = __importDefault(require("@mui/icons-material/ChatBubbleOutlineOutlined"));
var Document = function (props) {
    var document = props.document;
    var _a = react_1.default.useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var open = Boolean(anchorEl);
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    return (react_1.default.createElement("div", { className: "lg:m-4 mt-0 p-3 rounded-lg border border-gray-300" },
        react_1.default.createElement("div", { className: "p-3 py-1" },
            react_1.default.createElement("div", { className: "text-base font-semibold flex justify-between w-full" },
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/documents/".concat(document.id) },
                    react_1.default.createElement("span", { className: "uppercase" }, document.title)),
                react_1.default.createElement("button", { id: "basic-button", "aria-controls": open ? "basic-menu" : undefined, "aria-haspopup": "true", "aria-expanded": open ? "true" : undefined, onClick: handleClick },
                    react_1.default.createElement(MoreVert_1.default, null)),
                react_1.default.createElement(material_1.Menu, { id: "basic-menu", anchorEl: anchorEl, open: open, onClose: handleClose, MenuListProps: {
                        "aria-labelledby": "basic-button",
                    } },
                    react_1.default.createElement(material_1.MenuItem, null, "Ch\u1EC9nh s\u1EEDa"),
                    react_1.default.createElement(material_1.MenuItem, null, "X\u00F3a (ch\u1EC9 admin)"))),
            react_1.default.createElement("div", { className: "py-3 text-sm opacity-60 flex" },
                document.author !== null ? react_1.default.createElement("span", { className: "font-semibold pr-2" }, document.author.name) : react_1.default.createElement(react_1.default.Fragment, null),
                react_1.default.createElement("span", null, (0, moment_1.default)(document.createdAt).format(('MMMM Do YYYY, h:mm a'))))),
        react_1.default.createElement("div", { className: "p-3 py-0 flex flex-wrap w-full" },
            react_1.default.createElement("div", { className: "p-2 py-1 mr-2 mb-2 rounded-md text-xs bg-main text-white w-fit" }, document.subject === null ? react_1.default.createElement(react_1.default.Fragment, null) : react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(ComputerOutlined_1.default, null),
                " ",
                document.subject.name)),
            react_1.default.createElement("div", { className: "p-2 py-1 mb-2 rounded-md text-xs bg-gray-500 text-white w-fit" },
                react_1.default.createElement(ComputerOutlined_1.default, null),
                " ",
                document.program)),
        react_1.default.createElement("div", { className: "p-3" },
            react_1.default.createElement("span", { className: "py-3 text-xs flex items-center" },
                react_1.default.createElement(SchoolOutlined_1.default, null),
                " ",
                react_1.default.createElement("span", { className: "px-2 truncate", dangerouslySetInnerHTML: { __html: document.description.length > 100 ? "Chưa có mô tả, hãy xem bài viết đầy đủ" : document.description } }))),
        react_1.default.createElement("span", { className: "p-3 flex items-center" },
            react_1.default.createElement(Favorite_1.default, null),
            " ",
            react_1.default.createElement("span", { className: "px-1" }, document.likes.length),
            react_1.default.createElement("span", { className: "px-2" }),
            react_1.default.createElement(ChatBubbleOutlineOutlined_1.default, null),
            " ",
            react_1.default.createElement("span", { className: "px-1" }, document.comments.length)),
        react_1.default.createElement("div", { className: "text-right" },
            react_1.default.createElement(react_router_dom_1.NavLink, { to: "/documents/".concat(document.id) },
                react_1.default.createElement("span", { className: "text-sm opacity-80" }, "Xem th\u00EAm ...")))));
};
exports.default = Document;
