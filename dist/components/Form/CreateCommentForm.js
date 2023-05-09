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
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var api_1 = require("../../services/api");
var CreateCommentForm = function (props) {
    var user = (0, react_redux_1.useSelector)(function (state) { return state.user.value; });
    var _a = (0, react_1.useState)(""), inputValue = _a[0], setInputValue = _a[1];
    //   const type = props.type;
    var infor = props.infor;
    var handleChange = function (e) {
        setInputValue(e.target.value);
    };
    var handleSubmit = function (e) {
        var _a;
        e.preventDefault();
        var comment = (_a = {
                content: inputValue,
                user: user
            },
            _a[props.type] = infor,
            _a);
        console.log(comment);
        (0, api_1.postComment)(comment)
            .then(function () {
            alert("comment success!");
            setInputValue("");
            props.setUpdateData(!props.updateData);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, user !== null ?
        react_1.default.createElement("form", { onSubmit: handleSubmit, className: 'w-full' },
            react_1.default.createElement(material_1.TextField, { fullWidth: true, id: "filled-multiline-static", label: "\u0110\u1EC3 l\u1EA1i b\u00ECnh lu\u1EADn \u1EDF \u0111\u00E2y", multiline: true, rows: 4, value: inputValue, onChange: handleChange }),
            react_1.default.createElement(material_1.Button, { variant: 'contained', type: 'submit', sx: { mt: 2 } }, "B\u00ECnh lu\u1EADn"))
        :
            react_1.default.createElement("div", { className: 'flex flex-col items-center border-2 rounded-md' },
                react_1.default.createElement("span", { className: 'my-2' }, "B\u1EA1n c\u1EA7n \u0111\u0103ng nh\u1EADp \u0111\u1EC3 th\u1EF1c hi\u1EC7n ch\u1EE9c n\u0103ng n\u00E0y"),
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/login", className: "p-2 m-2 bg-blue-500 text-white shadow-sm rounded-md" }, "\u0110\u0103ng nh\u1EADp"))));
};
exports.default = CreateCommentForm;
