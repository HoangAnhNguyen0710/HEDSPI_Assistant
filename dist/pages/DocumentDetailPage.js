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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable react-hooks/exhaustive-deps */
var material_1 = require("@mui/material");
var moment_1 = __importDefault(require("moment"));
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var PagesLayout_1 = __importDefault(require("../layouts/PagesLayout"));
var DocumentImageDetail_1 = __importDefault(require("../components/DocumentImageDetail"));
var Favorite_1 = __importDefault(require("@mui/icons-material/Favorite"));
var FavoriteBorderOutlined_1 = __importDefault(require("@mui/icons-material/FavoriteBorderOutlined"));
var CreateCommentForm_1 = __importDefault(require("../components/Form/CreateCommentForm"));
var react_2 = require("react");
var api_1 = require("../services/api");
var storage_1 = require("firebase/storage");
var firebaseConfig_1 = require("../config/firebaseConfig");
var react_redux_1 = require("react-redux");
// import { useState, useEffect } from "react";
// import { storage } from "../config/firebaseConfig";
// import { ref, listAll, getDownloadURL } from "firebase/storage";
// import { v4 } from "uuid";
// import ImageUploader from "../components/ImageUpload";
var DocumentDetailPage = function () {
    var user = (0, react_redux_1.useSelector)(function (state) { return state.user.value; });
    var id = (0, react_router_dom_1.useParams)().id;
    var _a = (0, react_1.useState)(false), openDialog = _a[0], setOpenDialog = _a[1];
    var _b = (0, react_1.useState)(null), dialogImage = _b[0], setDialogImage = _b[1];
    var _c = (0, react_1.useState)(), commentList = _c[0], setCommentList = _c[1];
    var _d = (0, react_1.useState)(true), updateData = _d[0], setUpdateData = _d[1];
    var _e = (0, react_1.useState)(null), document = _e[0], setDocument = _e[1];
    var _f = (0, react_1.useState)(true), isLoader = _f[0], setIsLoader = _f[1];
    var _g = (0, react_1.useState)(false), isLiked = _g[0], setIsLiked = _g[1];
    var _h = (0, react_1.useState)(), likeId = _h[0], setLikeId = _h[1];
    var _j = (0, react_1.useState)(0), likeNum = _j[0], setLikeNum = _j[1];
    (0, react_2.useEffect)(function () {
        if (document !== null) {
            (0, api_1.getDocumentCmt)(document.id).then(function (res) {
                setCommentList(res.data);
            })
                .catch(function (err) { return console.log(err); });
        }
    }, [updateData]);
    (0, react_2.useEffect)(function () {
        console.log(user);
        if (user !== null) {
            (0, api_1.checkHasLike)(user.id, parseInt(id), "document")
                .then(function (res) {
                console.log(res.data);
                setIsLiked(true);
                setLikeId(res.data.id);
            })
                .catch(function (err) { return setIsLiked(false); });
        }
    }, [user]);
    var LikeOrDislike = function () {
        if (user !== null) {
            if (isLiked === false) {
                (0, api_1.postLike)(user, document, "document")
                    .then(function (res) {
                    setLikeId(res.data.id);
                    setIsLiked(true);
                    setLikeNum(likeNum + 1);
                });
            }
            else {
                (0, api_1.disLike)(likeId)
                    .then(function () {
                    setIsLiked(false);
                    setLikeNum(likeNum - 1);
                });
            }
        }
        else
            alert("Bạn phải đăng nhập để thực hiện chức năng này !");
    };
    var handleOpenDialog = function (item) {
        setOpenDialog(true);
        setDialogImage(item);
    };
    var handleCloseDialog = function () {
        setOpenDialog(false);
    };
    var _k = (0, react_1.useState)([]), imageList = _k[0], setImageList = _k[1];
    (0, react_2.useEffect)(function () {
        (0, api_1.getDocumentById)(parseInt(id)).then(function (res) {
            console.log(res.data);
            setDocument(res.data);
            setLikeNum(res.data.likes.length);
            if (imageList.length === 0) {
                var imageListRef = (0, storage_1.ref)(firebaseConfig_1.storage, "".concat(res.data.subject.name, "/").concat(res.data.author.name, "/"));
                (0, storage_1.listAll)(imageListRef).then(function (res) {
                    res.items.forEach(function (item) {
                        (0, storage_1.getDownloadURL)(item).then(function (url) {
                            setImageList(function (prev) { return __spreadArray(__spreadArray([], prev, true), [url], false); });
                        });
                    });
                }).catch(function (err) { return console.log(err); });
            }
            (0, api_1.getDocumentCmt)(res.data.id).then(function (res) {
                console.log(res.data);
                setCommentList(res.data);
            })
                .catch(function (err) { return console.log(err); });
            //   setTimeout(()=> {
            //   console.log("aaaa", user);
            //   if(user !== null){
            //     checkHasLike(user.id, res.data.id, "document")
            //     .then((res) => {
            //       setIsLiked(true);
            //       setLikeId(res.data.id);
            //     })
            //     .catch((err) => setIsLiked(false))
            //   }
            // },1000);
            setIsLoader(false);
        }).catch(function (err) {
            console.log(err);
            // setErrMSG(err.response);
        });
    }, []);
    var PageContent = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "min-h-screen py-16 px-10" }, document !== null ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "flex items-center justify-between w-full pb-6" },
                react_1.default.createElement(material_1.Breadcrumbs, { "aria-label": "breadcrumb" },
                    react_1.default.createElement("div", { className: "text-md sm:text-xl font-semibold uppercase" }, (document.subject !== null ? '<' + document.subject.name + '> ' : "") + document.title))),
            react_1.default.createElement("div", { className: "flex text-sm w-full py-2" },
                react_1.default.createElement(material_1.Avatar, { src: document.author !== null ? document.author.picture : "" }),
                react_1.default.createElement("div", { className: "flex flex-col items-center px-2" },
                    react_1.default.createElement("span", { className: "font-semibold" },
                        document.author !== null ? document.author.name + ' ' : "Người bí ẩn",
                        " ",
                        document.author !== null ? document.author.schoolyear : ""),
                    react_1.default.createElement("span", { className: "px-1" },
                        "-- ",
                        (0, moment_1.default)(document.createdAt).format("MMMM Do YYYY"),
                        "--"))),
            react_1.default.createElement("div", { className: "w-full border rounded-md my-4 p-4 overflow-y-auto", dangerouslySetInnerHTML: { __html: document.description } }),
            react_1.default.createElement("div", { className: "flex flex-wrap w-full h-fit overflow-y-auto items-center py-4" }, imageList.map(function (image) { return (react_1.default.createElement("div", { className: "flex-wrap w-1/2 md:w-1/3 lg:w-1/4 h-fit", onClick: function () { return handleOpenDialog(image); }, key: image },
                react_1.default.createElement(material_1.Card, { sx: {
                        p: 1,
                        m: 2,
                        ml: 0,
                        maxHeight: "12rem",
                        minHeight: "12rem",
                        display: "flex",
                        alignItems: "center",
                    }, variant: "outlined" },
                    react_1.default.createElement("img", { key: image, src: image, alt: image.name, loading: "lazy", className: "w-full rounded-md" })))); })),
            react_1.default.createElement("span", { className: "p-3 pl-0 flex items-center hover:cursor-pointer w-fit", onClick: LikeOrDislike },
                isLiked ? react_1.default.createElement(Favorite_1.default, null) : react_1.default.createElement(FavoriteBorderOutlined_1.default, null),
                " ",
                react_1.default.createElement("span", { className: "px-1" }, likeNum)),
            react_1.default.createElement("span", { className: "text-md font-medium py-2" },
                "B\u00ECnh lu\u1EADn (",
                commentList !== undefined ? commentList.length : react_1.default.createElement(react_1.default.Fragment, null, "0"),
                ")"),
            commentList !== undefined ? (commentList.map(function (comment) { return (react_1.default.createElement("div", { className: "my-4 p-4 rounded-md border-2 w-4/5", key: comment.id },
                react_1.default.createElement("div", { className: "flex flex-wrap" },
                    react_1.default.createElement("span", { className: "font-medium pr-2" }, comment.user ? comment.user.name : ""),
                    react_1.default.createElement("span", null,
                        "---",
                        (0, moment_1.default)(comment.createdAt).format("MMMM Do YYYY"),
                        "---")),
                react_1.default.createElement("div", { className: "py-2" }, comment.content))); })) : (react_1.default.createElement(react_1.default.Fragment, null)),
            react_1.default.createElement("div", { className: "w-4/5 py-4 rounded-md" },
                react_1.default.createElement(CreateCommentForm_1.default, { infor: document, type: "document", updateData: updateData, setUpdateData: setUpdateData })))) : (react_1.default.createElement(react_1.default.Fragment, null))),
        react_1.default.createElement(material_1.Dialog, { onClose: handleCloseDialog, open: openDialog, fullWidth: true },
            react_1.default.createElement(material_1.DialogContent, null,
                react_1.default.createElement("div", { className: "flex items-center justify-center w-full" },
                    react_1.default.createElement(DocumentImageDetail_1.default, { image: dialogImage }))))));
    return react_1.default.createElement(PagesLayout_1.default, { page: PageContent, isLoader: isLoader });
};
exports.default = DocumentDetailPage;
