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
var react_1 = __importStar(require("react"));
var SchoolOutlined_1 = __importDefault(require("@mui/icons-material/SchoolOutlined"));
var SellOutlined_1 = __importDefault(require("@mui/icons-material/SellOutlined"));
var MoreVert_1 = __importDefault(require("@mui/icons-material/MoreVert"));
var material_1 = require("@mui/material");
var Favorite_1 = __importDefault(require("@mui/icons-material/Favorite"));
var QuestionMark_1 = __importDefault(require("@mui/icons-material/QuestionMark"));
var ChatBubbleOutlineOutlined_1 = __importDefault(require("@mui/icons-material/ChatBubbleOutlineOutlined"));
var moment_1 = __importDefault(require("moment/moment"));
var QuestionDetail_1 = __importDefault(require("./QuestionDetail"));
var Question = function (props) {
    var question = props.question;
    var _a = react_1.default.useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var open = Boolean(anchorEl);
    var _b = (0, react_1.useState)(false), openDialog = _b[0], setOpenDialog = _b[1];
    var _c = (0, react_1.useState)(question.likes.length), likeNum = _c[0], setLikeNum = _c[1];
    var handleOpenDialog = function () {
        setOpenDialog(true);
    };
    var handleCloseDialog = function () {
        setOpenDialog(false);
    };
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    return (react_1.default.createElement("div", { className: "w-full lg:m-4 mt-0 p-3 rounded-lg border border-gray-300 flex flex-col hover:scale-105 transition ease-in-out delay-150 duration-200" },
        react_1.default.createElement("div", { className: "p-3 py-1 flex flex-col" },
            react_1.default.createElement("div", { className: "text-base font-semibold flex justify-between w-full pb-2" },
                react_1.default.createElement("span", { className: "uppercase flex justify-center" },
                    react_1.default.createElement(QuestionMark_1.default, null),
                    " ",
                    question.title),
                react_1.default.createElement("button", { id: "basic-button", "aria-controls": open ? "basic-menu" : undefined, "aria-haspopup": "true", "aria-expanded": open ? "true" : undefined, onClick: handleClick },
                    react_1.default.createElement(MoreVert_1.default, null)),
                react_1.default.createElement(material_1.Menu, { id: "basic-menu", anchorEl: anchorEl, open: open, onClose: handleClose, MenuListProps: {
                        "aria-labelledby": "basic-button",
                    } },
                    react_1.default.createElement(material_1.MenuItem, null, "Ch\u1EC9nh s\u1EEDa"),
                    react_1.default.createElement(material_1.MenuItem, null, "X\u00F3a (ch\u1EC9 admin)"))),
            react_1.default.createElement("span", { className: "flex text-xs opacity-60 py-1 items-center" },
                react_1.default.createElement("div", { className: "text-sm flex flex-col px-1 w-fit items-center" },
                    react_1.default.createElement("span", { className: "font-semibold pr-2" }, question.author !== null ? (react_1.default.createElement(react_1.default.Fragment, null,
                        question.author.name,
                        " ",
                        question.author.schoolyear)) : (react_1.default.createElement(react_1.default.Fragment, null, "Nguyen Hoang Anh")))),
                react_1.default.createElement("span", { className: "px-2" }, (0, moment_1.default)(question.createdAt).format("MMMM Do YYYY, h:mm:ss a")))),
        react_1.default.createElement("div", { className: "p-3 py-0 flex flex-col sm:flex-row flex-wrap" }, question.topic.map(function (topic) { return (react_1.default.createElement("span", { className: "m-2 ml-0 text-white w-fit", key: topic.toString() },
            react_1.default.createElement(material_1.Chip, { icon: react_1.default.createElement(SellOutlined_1.default, null), label: topic, sx: { p: 1 } }))); })),
        react_1.default.createElement("div", { className: "p-3" },
            react_1.default.createElement("span", { className: "py-3 text-xs flex items-center" },
                react_1.default.createElement(SchoolOutlined_1.default, null),
                " ",
                react_1.default.createElement("span", { className: "px-2 truncate", dangerouslySetInnerHTML: {
                        __html: question.description.length > 100
                            ? "Chưa có mô tả, hãy xem bài viết đầy đủ"
                            : question.description,
                    } }))),
        react_1.default.createElement("span", { className: "p-3 flex items-center" },
            react_1.default.createElement(Favorite_1.default, null),
            " ",
            react_1.default.createElement("span", { className: "px-1" }, likeNum),
            react_1.default.createElement("span", { className: "px-2" }),
            react_1.default.createElement(ChatBubbleOutlineOutlined_1.default, null),
            " ",
            react_1.default.createElement("span", { className: "px-1" }, question.comments.length)),
        react_1.default.createElement("div", { className: "text-right" },
            react_1.default.createElement("button", { className: "text-sm opacity-80", onClick: handleOpenDialog }, "Xem th\u00EAm...")),
        react_1.default.createElement(material_1.Dialog, { open: openDialog, onClose: handleCloseDialog, fullWidth: true },
            react_1.default.createElement(material_1.DialogContent, null,
                react_1.default.createElement("div", { className: "flex items-center justify-center w-full" },
                    react_1.default.createElement(QuestionDetail_1.default, { question: question, likeNum: likeNum, setLikeNum: setLikeNum }))))));
};
exports.default = Question;
