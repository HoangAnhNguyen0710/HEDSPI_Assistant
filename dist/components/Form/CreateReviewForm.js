"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
/* eslint-disable no-undef */
var material_1 = require("@mui/material");
var react_1 = __importStar(require("react"));
var react_2 = require("react");
var Add_1 = __importDefault(require("@mui/icons-material/Add"));
var Message_1 = __importDefault(require("../Message"));
var api_1 = require("../../services/api");
var jodit_react_ts_1 = __importDefault(require("jodit-react-ts"));
var react_redux_1 = require("react-redux");
var react_3 = require("react");
var CreateReviewForm = function (props) {
    //user hiện tại
    var currentUser = (0, react_redux_1.useSelector)(function (state) { return state.user.value; });
    //default review
    var defaultR = {
        title: "",
        topic: [],
        author: currentUser,
        description: "",
        type: "",
        likes: 0,
        views: 0,
        rating: 0,
    };
    //quản lý review dc nhập vào
    var _a = (0, react_2.useState)(defaultR), review = _a[0], setReview = _a[1];
    //quản lý list topic
    var _b = (0, react_2.useState)([]), topicList = _b[0], setTopicList = _b[1];
    var _c = (0, react_2.useState)(""), addTopic = _c[0], setAddTopic = _c[1];
    //quản lý message và loại message
    var _d = (0, react_2.useState)(""), MSG = _d[0], setMSG = _d[1];
    var _e = (0, react_2.useState)(""), MSGType = _e[0], setMSGType = _e[1];
    var _f = (0, react_2.useState)(false), openSnackBar = _f[0], setOpenSnackBar = _f[1];
    //quản lý submit form
    var _g = (0, react_2.useState)(false), confirm = _g[0], setConfirm = _g[1];
    //quản lý cho review description
    var editor = (0, react_1.useRef)(null);
    var config = {
        readonly: false,
        placeholder: "Nhập mô tả",
        uploader: {
            insertImageAsBase64URI: true
        },
        tabIndex: 1,
    };
    (0, react_3.useEffect)(function () {
        if (currentUser === null) {
            alert("Vui lòng đăng nhập để thực hiện chức năng này!");
            // eslint-disable-next-line no-restricted-globals
            location.reload();
        }
    }, [currentUser]);
    var handleCloseSnackBar = function (event, reason) {
        if (reason === "clickaway") {
            return;
        }
        setOpenSnackBar(false);
    };
    var handleChange = function (e) {
        var _a;
        setReview(__assign(__assign({}, review), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        if (confirm === true) {
            var uploadQ = review;
            uploadQ.topic = topicList;
            (0, api_1.postReview)(uploadQ)
                .then(function (res) {
                console.log(res);
                setMSGType("success");
                setMSG("Tạo review thành công !");
                setOpenSnackBar(true);
                props.setReloadData(!props.reloadData);
            })
                .catch(function (err) { return console.log(err); });
            setReview(defaultR);
            setTopicList([]);
            setConfirm(false);
            // props.setOpen(false);
        }
    };
    var addTopicToList = function () {
        if (topicList.filter(function (topic) { return topic === addTopic; }).length === 0 &&
            topicList.length < 5 &&
            addTopic !== "") {
            setTopicList(__spreadArray(__spreadArray([], topicList, true), [addTopic], false));
            setAddTopic("");
            return;
        }
        if (topicList.length === 5) {
            setMSGType("error");
            setMSG("Số topic tối đa là 5!");
            setOpenSnackBar(true);
        }
        if (addTopic === "") {
            setMSGType("error");
            setMSG("Topic không hợp lệ!");
            setOpenSnackBar(true);
        }
    };
    var handleDeleteTopic = function (topic) {
        var newList = topicList.filter(function (topics) { return topics !== topic; });
        setTopicList(newList);
    };
    return (react_1.default.createElement("div", { className: "w-full m-2 p-2" },
        react_1.default.createElement("span", { className: "py-3 text-2xl font-semibold" }, "VI\u1EBET REVIEW"),
        react_1.default.createElement("form", { className: "py-6", onSubmit: handleSubmit },
            react_1.default.createElement("div", { className: "flex flex-wrap" },
                react_1.default.createElement(material_1.TextField, { name: "title", value: review.title, fullWidth: true, label: "Ti\u00EAu \u0111\u1EC1", id: "fullWidth", 
                    // htmlFor="component-outlined"
                    size: "small", sx: { mb: 2 }, onChange: handleChange, required: true }),
                react_1.default.createElement("div", { className: "w-4/5 flex mb-4 items-center" },
                    react_1.default.createElement("div", { className: "w-4/5" },
                        react_1.default.createElement(material_1.TextField, { name: "title", value: addTopic, fullWidth: true, label: "Topic", 
                            // id="fullWidth"
                            // htmlFor="component-outlined"
                            size: "small", onChange: function (e) { return setAddTopic(e.target.value); } })),
                    react_1.default.createElement("div", { className: "w-1/5" },
                        react_1.default.createElement("button", { className: "bg-cyan-500 text-white p-2 rounded-md", onClick: addTopicToList },
                            react_1.default.createElement(Add_1.default, null)))),
                react_1.default.createElement("div", { className: "w-full flex  flex-wrap" }, topicList.map(function (topic) { return (react_1.default.createElement("div", { className: "mr-2 pb-3" },
                    react_1.default.createElement(material_1.Chip, { label: topic, variant: "outlined", onDelete: function () { return handleDeleteTopic(topic); } }))); })),
                react_1.default.createElement("div", { className: "w-4/5 mb-4 pt-1 pr-3" },
                    react_1.default.createElement(material_1.FormControl, { size: "small", fullWidth: true },
                        react_1.default.createElement(material_1.InputLabel, { id: "demo-select-small" }, "Th\u1EC3 lo\u1EA1i"),
                        react_1.default.createElement(material_1.Select, { labelId: "demo-select-small", id: "demo-select-small", fullWidth: true, label: "Th\u1EC3 lo\u1EA1i", name: "type", value: review.type, onChange: handleChange },
                            react_1.default.createElement(material_1.MenuItem, { value: "Review m\u00F4n h\u1ECDc" }, "Review m\u00F4n h\u1ECDc"),
                            react_1.default.createElement(material_1.MenuItem, { value: "Review h\u1ECDc k\u00EC" }, "Review h\u1ECDc k\u00EC"),
                            react_1.default.createElement(material_1.MenuItem, { value: "Review kh\u00E1c" }, "Review kh\u00E1c"))))),
            react_1.default.createElement("div", { className: "my-4 w-full", ref: editor },
                react_1.default.createElement(jodit_react_ts_1.default, { defaultValue: review.description, 
                    // tabIndex={1} // tabIndex of textarea
                    onChange: function (newContent) { return setReview(__assign(__assign({}, review), { description: newContent })); }, config: config })),
            react_1.default.createElement("div", { className: "" },
                react_1.default.createElement(material_1.Button, { variant: "contained", type: "submit", onClick: function () { return setConfirm(true); } }, "T\u1EA1o review"))),
        react_1.default.createElement(material_1.Snackbar, { open: openSnackBar, autoHideDuration: 3000, onClose: handleCloseSnackBar },
            react_1.default.createElement(Message_1.default, { severity: MSGType, sx: { width: "100%" }, onClose: handleCloseSnackBar }, MSG))));
};
exports.default = CreateReviewForm;
