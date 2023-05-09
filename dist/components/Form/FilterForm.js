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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SearchOutlined_1 = __importDefault(require("@mui/icons-material/SearchOutlined"));
var Room_1 = __importDefault(require("@mui/icons-material/Room"));
var material_1 = require("@mui/material");
var react_1 = __importStar(require("react"));
var FilterForm = function (props) {
    var _a = (0, react_1.useState)({
        subject_name: "",
        subject_code: "",
        year: 0,
        semester_1: 0,
        semester_2: 0,
        program: "", // hệ đào tạo 4 hay 5 năm ???
    }), filter = _a[0], setFilter = _a[1];
    var handleChange = function (e) {
        var _a;
        setFilter(__assign(__assign({}, filter), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var clearChange = function (e) {
        var _a, _b;
        if (e.target.name === "year")
            setFilter(__assign(__assign({}, filter), (_a = {}, _a[e.target.name] = 0, _a)));
        else
            setFilter(__assign(__assign({}, filter), (_b = {}, _b[e.target.name] = "", _b)));
    };
    var handleSubmit = function (e) {
        var fullFilter = filter;
        if (filter.year === 0) {
            fullFilter.semester_1 = 1;
            fullFilter.semester_2 = 10;
        }
        else {
            fullFilter.semester_1 = (filter.year * 2) - 1;
            fullFilter.semester_2 = filter.year * 2;
        }
        e.preventDefault();
        props.setFilterVal(fullFilter);
        // getDocumentNum('all', fullFilter).then((res)=> alert(res.data))
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("form", { className: "flex flex-col w-full", onSubmit: handleSubmit },
            react_1.default.createElement("div", { className: "w-full py-3 pb-4" },
                react_1.default.createElement(material_1.TextField, { fullWidth: true, id: "input-with-icon-adornment", label: "T\u00ECm ki\u1EBFm theo t\u00EAn h\u1ECDc ph\u1EA7n", value: filter.subject_name, placeholder: "Nh\u1EADp t\u00EAn h\u1ECDc ph\u1EA7n", size: "small", name: "subject_name", onChange: handleChange, InputProps: {
                        startAdornment: (react_1.default.createElement(material_1.InputAdornment, { position: "start" },
                            react_1.default.createElement(SearchOutlined_1.default, null))),
                    } })),
            react_1.default.createElement("div", { className: "w-full py-2 pb-4" },
                react_1.default.createElement(material_1.TextField, { fullWidth: true, id: "outlined-required", label: "T\u00ECm ki\u1EBFm theo m\u00E3 h\u1ECDc ph\u1EA7n", value: filter.subject_code, placeholder: "Nh\u1EADp m\u00E3 h\u1ECDc ph\u1EA7n", size: "small", name: "subject_code", onChange: handleChange, InputProps: {
                        startAdornment: (react_1.default.createElement(material_1.InputAdornment, { position: "start" },
                            react_1.default.createElement(Room_1.default, null))),
                    } })),
            react_1.default.createElement("button", { type: "submit", className: "w-full text-white bg-main p-3 rounded-md" }, "SEARCH"),
            react_1.default.createElement("label", { className: "py-4 font-medium" }, "Ch\u01B0\u01A1ng tr\u00ECnh"),
            react_1.default.createElement(material_1.RadioGroup, { name: "program", value: filter.program, onChange: handleChange, onDoubleClick: clearChange },
                react_1.default.createElement(material_1.FormControlLabel, { control: react_1.default.createElement(material_1.Radio, { value: "K64 \u0111\u1ED5 v\u1EC1 tr\u01B0\u1EDBc" }), label: "T\u1EEB K64 tr\u1EDF v\u1EC1 tr\u01B0\u1EDBc" }),
                react_1.default.createElement(material_1.FormControlLabel, { control: react_1.default.createElement(material_1.Radio, { value: "T\u1EEB K65 tr\u1EDF \u0111i" }), label: "T\u1EEB K65 tr\u1EDF \u0111i" })),
            react_1.default.createElement("label", { className: "py-4 font-medium" }, "Th\u1EDDi gian"),
            react_1.default.createElement(material_1.RadioGroup, { "aria-labelledby": "demo-radio-buttons-group-label", value: filter.year, name: "year", onChange: handleChange, onDoubleClick: clearChange },
                react_1.default.createElement(material_1.FormControlLabel, { value: 1, control: react_1.default.createElement(material_1.Radio, null), label: "N\u0103m 1" }),
                react_1.default.createElement(material_1.FormControlLabel, { value: 2, control: react_1.default.createElement(material_1.Radio, null), label: "N\u0103m 2" }),
                react_1.default.createElement(material_1.FormControlLabel, { value: 3, control: react_1.default.createElement(material_1.Radio, null), label: "N\u0103m 3" }),
                react_1.default.createElement(material_1.FormControlLabel, { value: 4, control: react_1.default.createElement(material_1.Radio, null), label: "N\u0103m 4" }),
                react_1.default.createElement(material_1.FormControlLabel, { value: 5, control: react_1.default.createElement(material_1.Radio, null), label: "N\u0103m 5" })))));
};
exports.default = FilterForm;
