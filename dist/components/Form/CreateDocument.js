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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
var material_1 = require("@mui/material");
var react_1 = __importDefault(require("react"));
var ImageUpload_1 = __importDefault(require("../ImageUpload"));
var react_2 = require("react");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var api_1 = require("../../services/api");
var subjects_1 = require("../../slices/subjects");
var jodit_react_ts_1 = __importDefault(require("jodit-react-ts"));
var CreateDocumentForm = function () {
    var user = (0, react_redux_1.useSelector)(function (state) { return state.user.value; });
    var subjectList = (0, react_redux_1.useSelector)(function (state) { return state.subject.value; });
    var defaultDoc = {
        title: "",
        subject: null,
        program: "",
        author: user,
        lecturer: "",
        description: "",
        semester: 1,
        type: "",
        likes: 0,
        views: 0,
        rating: 0,
    };
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _a = (0, react_2.useState)(defaultDoc), document = _a[0], setDocument = _a[1];
    var _b = (0, react_2.useState)(false), uploadIMG = _b[0], setUploadIMG = _b[1];
    var _c = (0, react_2.useState)(false), isUploaded = _c[0], setIsUploaded = _c[1];
    var dispatch = (0, react_redux_1.useDispatch)();
    var editor = (0, react_2.useRef)(null);
    var config = {
        readonly: false,
        placeholder: "Nhập mô tả",
        uploader: {
            insertImageAsBase64URI: true
        },
    };
    var handleChange = function (e) {
        var _a;
        if (e.target.name !== "subject") {
            setDocument(__assign(__assign({}, document), (_a = {}, _a[e.target.name] = e.target.value, _a)));
        }
    };
    var handleChangeSubject = function (value) {
        setDocument(__assign(__assign({}, document), { "subject": value }));
    };
    (0, react_2.useEffect)(function () {
        // setDocument(defaultDoc);
        if (isUploaded) {
            alert("Đăng tài liệu thành công !");
            navigate("/documents");
        }
    }, [isUploaded]);
    (0, react_2.useEffect)(function () {
        api_1.getAllSubject.then(function (res) { return dispatch((0, subjects_1.setSubjects)(res.data)); });
    }, []);
    var handleSubmit = function (e) {
        e.preventDefault();
        console.log(document);
        setUploadIMG(!uploadIMG);
        (0, api_1.postDocument)(document)
            .then(function (res) { return console.log(res); })
            .catch(function (err) { return console.log(err); });
        setIsUploaded(true);
        //  setDocument(defaultDoc);
    };
    return (react_1.default.createElement("div", { className: "w-full sm:w-2/3 m-3" },
        react_1.default.createElement("span", { className: " text-2xl font-semibold" }, "T\u1EA1o t\u00E0i li\u1EC7u"),
        react_1.default.createElement("div", { className: "flex flex-wrap my-3" },
            react_1.default.createElement(material_1.TextField, { name: "title", value: document.title, fullWidth: true, label: "Ti\u00EAu \u0111\u1EC1", id: "fullWidth", 
                // htmlFor="component-outlined"
                size: "small", sx: { mb: 2 }, onChange: handleChange }),
            react_1.default.createElement("div", { className: "w-1/2 md:w-1/5 mb-4 pr-3" },
                react_1.default.createElement(material_1.FormControl, { size: "small", fullWidth: true },
                    react_1.default.createElement(material_1.InputLabel, { id: "demo-select-small" }, "Ch\u01B0\u01A1ng tr\u00ECnh"),
                    react_1.default.createElement(material_1.Select, { name: "program", value: document.program, labelId: "demo-select-small", id: "demo-select-small", fullWidth: true, label: "Ch\u01B0\u01A1ng tr\u00ECnh", onChange: handleChange },
                        react_1.default.createElement(material_1.MenuItem, { value: "K64 \u0111\u1ED5 v\u1EC1 tr\u01B0\u1EDBc" }, "K64 \u0111\u1ED5 v\u1EC1 tr\u01B0\u1EDBc"),
                        react_1.default.createElement(material_1.MenuItem, { value: "T\u1EEB K65 tr\u1EDF \u0111i" }, "T\u1EEB K65 tr\u1EDF \u0111i")))),
            react_1.default.createElement("div", { className: "w-1/2 md:w-3/5 mb-4" },
                react_1.default.createElement(material_1.FormControl, { size: "small", fullWidth: true },
                    react_1.default.createElement(material_1.InputLabel, { id: "demo-select-small" }, "H\u1ECDc ph\u1EA7n"),
                    react_1.default.createElement(material_1.Select, { labelId: "demo-select-small", id: "demo-select-small", fullWidth: true, label: "H\u1ECDc ph\u1EA7n", name: "subject", 
                        // onChange={handleChange}
                        value: document.subject ? document.subject.name : "" }, subjectList.map(function (subject) { return (react_1.default.createElement(material_1.MenuItem, { key: subject.id, value: subject.name, onClick: function () { return handleChangeSubject(subject); } }, subject.name)); })))),
            react_1.default.createElement("div", { className: "w-full md:w-1/5 md:pl-3" },
                react_1.default.createElement(material_1.TextField, { fullWidth: true, label: "Gi\u1EA3ng vi\u00EAn", id: "fullWidth", 
                    // htmlFor="component-outlined"
                    size: "small", sx: { mb: 2 }, name: "lecturer", value: document.lecturer, onChange: handleChange })),
            react_1.default.createElement("div", { className: "w-1/2 mb-4 pr-3" },
                react_1.default.createElement(material_1.FormControl, { size: "small", fullWidth: true },
                    react_1.default.createElement(material_1.InputLabel, { id: "demo-select-small" }, "K\u00EC h\u1ECDc"),
                    react_1.default.createElement(material_1.Select, { labelId: "demo-select-small", id: "demo-select-small", fullWidth: true, label: "K\u00EC h\u1ECDc", name: "semester", value: document.semester, onChange: handleChange },
                        react_1.default.createElement(material_1.MenuItem, { value: 8 }, "8"),
                        react_1.default.createElement(material_1.MenuItem, { value: 7 }, "7"),
                        react_1.default.createElement(material_1.MenuItem, { value: 6 }, "6"),
                        react_1.default.createElement(material_1.MenuItem, { value: 5 }, "5"),
                        react_1.default.createElement(material_1.MenuItem, { value: 4 }, "4"),
                        react_1.default.createElement(material_1.MenuItem, { value: 3 }, "3"),
                        react_1.default.createElement(material_1.MenuItem, { value: 2 }, "2"),
                        react_1.default.createElement(material_1.MenuItem, { value: 1 }, "1")))),
            react_1.default.createElement("div", { className: "w-1/2 mb-4 prl3" },
                react_1.default.createElement(material_1.FormControl, { size: "small", fullWidth: true },
                    react_1.default.createElement(material_1.InputLabel, { id: "demo-select-small" }, "Th\u1EC3 lo\u1EA1i"),
                    react_1.default.createElement(material_1.Select, { labelId: "demo-select-small", id: "demo-select-small", fullWidth: true, label: "Th\u1EC3 lo\u1EA1i", name: "type", value: document.type, onChange: handleChange },
                        react_1.default.createElement(material_1.MenuItem, { value: "T\u00E0i li\u1EC7u m\u00F4n h\u1ECDc" }, "T\u00E0i li\u1EC7u m\u00F4n h\u1ECDc"),
                        react_1.default.createElement(material_1.MenuItem, { value: "\u0110\u1EC1 thi" }, "\u0110\u1EC1 thi"))))),
        react_1.default.createElement(ImageUpload_1.default, { upload: uploadIMG, setUpload: setUploadIMG, document: document, isUploaded: isUploaded, setIsUploaded: setIsUploaded }),
        react_1.default.createElement("div", { className: "my-4 w-full", ref: editor },
            react_1.default.createElement(jodit_react_ts_1.default, { defaultValue: document.description, 
                // tabIndex={1} // tabIndex of textarea
                onChange: function (newContent) { return setDocument(__assign(__assign({}, document), { description: newContent })); }, config: config })),
        react_1.default.createElement("form", { className: "py-6", onSubmit: handleSubmit },
            react_1.default.createElement("div", { className: "" },
                react_1.default.createElement(material_1.Button, { variant: "contained", type: "submit" }, "T\u1EA1o t\u00E0i li\u1EC7u")))));
};
exports.default = CreateDocumentForm;
