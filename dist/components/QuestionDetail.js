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
/* eslint-disable react-hooks/exhaustive-deps */
var react_1 = __importStar(require("react"));
var RateReview_1 = __importDefault(require("@mui/icons-material/RateReview"));
var SellOutlined_1 = __importDefault(require("@mui/icons-material/SellOutlined"));
var Favorite_1 = __importDefault(require("@mui/icons-material/Favorite"));
var FavoriteBorderOutlined_1 = __importDefault(require("@mui/icons-material/FavoriteBorderOutlined"));
var moment_1 = __importDefault(require("moment"));
var material_1 = require("@mui/material");
var CreateCommentForm_1 = __importDefault(require("./Form/CreateCommentForm"));
var api_1 = require("../services/api");
var api_2 = require("../services/api");
var react_redux_1 = require("react-redux");
var QuestionDetail = function (props) {
    var question = props.question;
    var _a = (0, react_1.useState)(), commentList = _a[0], setCommentList = _a[1];
    var _b = (0, react_1.useState)(true), updateData = _b[0], setUpdateData = _b[1];
    var _c = (0, react_1.useState)(false), isLiked = _c[0], setIsLiked = _c[1];
    var _d = (0, react_1.useState)(), likeId = _d[0], setLikeId = _d[1];
    var user = (0, react_redux_1.useSelector)(function (state) { return state.user.value; });
    (0, react_1.useEffect)(function () {
        (0, api_1.getQuestionCmt)(question.id).then(function (res) {
            setCommentList(res.data);
        })
            .catch(function (err) { return console.log(err); });
    }, [updateData]);
    (0, react_1.useEffect)(function () {
        setTimeout(function () {
            if (user !== null) {
                (0, api_2.checkHasLike)(user.id, question.id, "question")
                    .then(function (res) {
                    setIsLiked(true);
                    console.log(res);
                    setLikeId(res.data.id);
                })
                    .catch(function (err) { return setIsLiked(false); });
            }
        }, 1000);
    }, []);
    var LikeOrDislike = function () {
        if (user !== null) {
            if (isLiked === false) {
                (0, api_2.postLike)(user, question, "question")
                    .then(function (res) {
                    setLikeId(res.data.id);
                    setIsLiked(true);
                    props.setLikeNum(props.likeNum + 1);
                });
            }
            else {
                (0, api_2.disLike)(likeId)
                    .then(function () {
                    setIsLiked(false);
                    props.setLikeNum(props.likeNum - 1);
                });
            }
        }
        else
            alert("Bạn phải đăng nhập để thực hiện chức năng này !");
    };
    return (react_1.default.createElement("div", { className: "w-full p-2 flex flex-col max-w-xl" },
        react_1.default.createElement("div", { className: "font-semibold py-1 text-lg uppercase" }, question.title),
        react_1.default.createElement("div", { className: "py-1 text-sm flex items-center flex-wrap" },
            react_1.default.createElement("span", { className: "pr-2" },
                react_1.default.createElement(RateReview_1.default, null)),
            react_1.default.createElement("span", { className: "pr-2" }, question.author !== null && question.author.name),
            react_1.default.createElement("span", null,
                "---",
                (0, moment_1.default)(question.createdAt).format("MMMM Do YYYY, h:mm:ss a"),
                "---")),
        react_1.default.createElement("div", { className: "py-3" }, question.topic.map(function (topic) { return (react_1.default.createElement("span", { className: "mr-2", key: topic.toString() },
            react_1.default.createElement(material_1.Chip, { icon: react_1.default.createElement(SellOutlined_1.default, null), label: topic }))); })),
        react_1.default.createElement("div", { className: "my-4 p-4 rounded-md border-2 overflow-y-auto", dangerouslySetInnerHTML: { __html: question.description } }),
        react_1.default.createElement("span", { className: "p-3 pl-0 flex items-center hover:cursor-pointer w-fit", onClick: LikeOrDislike },
            isLiked ? react_1.default.createElement(Favorite_1.default, null) : react_1.default.createElement(FavoriteBorderOutlined_1.default, null),
            " ",
            react_1.default.createElement("span", { className: "px-1" }, props.likeNum)),
        react_1.default.createElement("span", { className: "text-md font-medium py-2" },
            "B\u00ECnh lu\u1EADn (",
            commentList !== undefined ? commentList.length : react_1.default.createElement(react_1.default.Fragment, null, "0"),
            ")"),
        commentList !== undefined ? commentList.map(function (comment) {
            return react_1.default.createElement("div", { className: "my-4 p-4 rounded-md border-2 w-4/5", key: comment.id },
                react_1.default.createElement("div", { className: "flex flex-wrap" },
                    react_1.default.createElement("span", { className: "font-medium pr-2" }, comment.user ? comment.user.name : ""),
                    react_1.default.createElement("span", null,
                        "---",
                        (0, moment_1.default)(comment.createdAt).format("MMMM Do YYYY"),
                        "---")),
                react_1.default.createElement("div", { className: "py-2" }, comment.content));
        }) : react_1.default.createElement(react_1.default.Fragment, null),
        react_1.default.createElement("div", { className: "w-4/5 py-4 rounded-md" },
            react_1.default.createElement(CreateCommentForm_1.default, { infor: question, type: "question", updateData: updateData, setUpdateData: setUpdateData }))));
};
exports.default = QuestionDetail;
