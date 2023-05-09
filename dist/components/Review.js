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
var material_1 = require("@mui/material");
var Favorite_1 = __importDefault(require("@mui/icons-material/Favorite"));
var SellOutlined_1 = __importDefault(require("@mui/icons-material/SellOutlined"));
var moment_1 = __importDefault(require("moment"));
var ReviewDetail_1 = __importDefault(require("./ReviewDetail"));
var ChatBubbleOutlineOutlined_1 = __importDefault(require("@mui/icons-material/ChatBubbleOutlineOutlined"));
var Review = function (props) {
    var _a = (0, react_1.useState)(false), openDialog = _a[0], setOpenDialog = _a[1];
    var review = props.review;
    var _b = (0, react_1.useState)(review.likes.length), likeNum = _b[0], setLikeNum = _b[1];
    var handleOpenDialog = function () {
        setOpenDialog(true);
    };
    var handleCloseDialog = function () {
        setOpenDialog(false);
    };
    return (react_1.default.createElement("div", { className: "w-full ml-3 my-6 mt-0 pb-3 p-2 rounded-lg border border-gray-300 flex flex-col" },
        react_1.default.createElement("div", { className: " px-6 flex items-center" },
            react_1.default.createElement("div", { className: "text-sm flex flex-col w-full" },
                react_1.default.createElement("span", { className: "font-semibold pt-3 uppercase" }, review.title),
                react_1.default.createElement("span", { className: "flex text-xs opacity-60 py-1 justify-between" },
                    react_1.default.createElement("div", { className: "py-3 text-sm opacity-60 flex" },
                        review.author !== null ? react_1.default.createElement("span", { className: "font-semibold pr-2" }, review.author.name) : react_1.default.createElement(react_1.default.Fragment, null),
                        react_1.default.createElement("span", null, (0, moment_1.default)(review.createdAt).format(('MMMM Do YYYY, h:mm a'))))))),
        react_1.default.createElement("div", { className: " px-6 flex flex-wrap" }, review.topic.map(function (topic) { return (react_1.default.createElement("span", { className: "m-2 ml-0 text-white w-fit", key: topic.toString() },
            react_1.default.createElement(material_1.Chip, { icon: react_1.default.createElement(SellOutlined_1.default, null), label: topic, sx: { p: 1 } }))); })),
        react_1.default.createElement("div", { className: " px-3" },
            react_1.default.createElement("div", { className: "p-3" },
                react_1.default.createElement("p", { className: " text-sm box-border overflow-hidden flex items-center" },
                    react_1.default.createElement(SchoolOutlined_1.default, null),
                    " ",
                    react_1.default.createElement("span", { className: "px-2 truncate", dangerouslySetInnerHTML: { __html: review.description.length > 100 ? "Chưa có mô tả, hãy xem bài viết đầy đủ" : review.description } }))),
            react_1.default.createElement("span", { className: "p-3 pt-2 pb-0 flex items-center" },
                react_1.default.createElement(Favorite_1.default, null),
                " ",
                react_1.default.createElement("span", { className: "px-1" }, likeNum),
                react_1.default.createElement("span", { className: "px-2" }),
                react_1.default.createElement(ChatBubbleOutlineOutlined_1.default, null),
                " ",
                react_1.default.createElement("span", { className: "px-1" }, review.comments.length)),
            react_1.default.createElement("div", { className: "text-right" },
                react_1.default.createElement("button", { className: "text-sm opacity-80", onClick: handleOpenDialog }, "Xem th\u00EAm..."))),
        react_1.default.createElement(material_1.Dialog, { open: openDialog, onClose: handleCloseDialog, fullWidth: true },
            react_1.default.createElement(material_1.DialogContent, null,
                react_1.default.createElement("div", { className: "flex items-center justify-center w-full" },
                    react_1.default.createElement(ReviewDetail_1.default, { review: review, likeNum: likeNum, setLikeNum: setLikeNum }))))));
};
exports.default = Review;
