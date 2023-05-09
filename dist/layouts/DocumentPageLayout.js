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
var material_1 = require("@mui/material");
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var FilterForm_1 = __importDefault(require("../components/Form/FilterForm"));
var PagesLayout_1 = __importDefault(require("./PagesLayout"));
var react_2 = require("react");
var DocumentList_1 = __importDefault(require("../components/DocumentList"));
var react_redux_1 = require("react-redux");
var api_1 = require("../services/api");
var document_1 = require("../slices/document");
var Pagination_1 = __importDefault(require("./Pagination"));
var DocumentPageLayout = function (props) {
    var _a = (0, react_2.useState)({
        createdAt: "DESC",
    }), sort = _a[0], setSort = _a[1];
    var _b = (0, react_2.useState)("Latest"), sortVal = _b[0], setSortVal = _b[1];
    var _c = (0, react_2.useState)(null), filterVal = _c[0], setFilterVal = _c[1];
    var _d = (0, react_2.useState)(1), numOfPages = _d[0], setNumOfPages = _d[1];
    var _e = (0, react_2.useState)(1), currentPage = _e[0], setCurrentPage = _e[1];
    var _f = (0, react_2.useState)(true), isLoader = _f[0], setIsLoader = _f[1];
    var dispatch = (0, react_redux_1.useDispatch)();
    var handleChange = function (e) {
        setSortVal(e.target.value);
        switch (e.target.value) {
            case "Oldest":
                setSort({
                    createdAt: "ASC",
                });
                break;
            case "Likes":
                setSort({
                    likes: "DESC"
                });
                break;
            default:
                setSort({
                    createdAt: "DESC",
                });
                break;
        }
        setCurrentPage(1);
    };
    (0, react_1.useEffect)(function () {
        (0, api_1.getDocument)(props.doc_type, currentPage, parseInt(process.env.REACT_APP_MAX_ITEMS_PER_PAGE), sort, filterVal)
            .then(function (res) {
            dispatch((0, document_1.setDocs)(res.data));
            setIsLoader(false);
        });
        (0, api_1.getDocumentNum)(props.doc_type, filterVal).then(function (res) { setNumOfPages(res.data / parseInt(process.env.REACT_APP_MAX_ITEMS_PER_PAGE)); });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, sortVal, filterVal]);
    var DocContent = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "min-h-screen py-16 px-10" },
            react_1.default.createElement("div", { className: "flex items-center justify-between w-full" },
                react_1.default.createElement(material_1.Breadcrumbs, { "aria-label": "breadcrumb" },
                    react_1.default.createElement(react_router_dom_1.NavLink, { to: "/", className: "text-2xl font-semibold p-3 m-3 mt-0 mr-0 sm:p-0 sm:m-0" }, props.page_name)),
                react_1.default.createElement("div", { className: "p-1" },
                    react_1.default.createElement(material_1.FormControl, { size: "small", sx: { m: 1, minWidth: 150 } },
                        react_1.default.createElement(material_1.InputLabel, { id: "demo-simple-select-label" }, "Sort"),
                        react_1.default.createElement(material_1.Select, { labelId: "demo-simple-select-label", id: "demo-simple-select", value: sortVal, label: "Sort", onChange: handleChange },
                            react_1.default.createElement(material_1.MenuItem, { value: "Latest" }, "M\u1EDBi nh\u1EA5t"),
                            react_1.default.createElement(material_1.MenuItem, { value: "Oldest" }, "C\u0169 nh\u1EA5t"),
                            react_1.default.createElement(material_1.MenuItem, { value: "Likes" }, "Ph\u1ED5 bi\u1EBFn nh\u1EA5t"))))),
            react_1.default.createElement("div", { className: "flex flex-wrap h-fit" },
                react_1.default.createElement("div", { className: "hidden sm:block sm:w-1/3 h-fit py-12 pr-4" },
                    react_1.default.createElement(FilterForm_1.default, { setFilterVal: setFilterVal })),
                react_1.default.createElement("div", { className: "w-full sm:w-2/3 py-5 min-h-max flex flex-col justify-between" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement(DocumentList_1.default, null)),
                    react_1.default.createElement(Pagination_1.default, { totalPage: numOfPages, setPageNum: setCurrentPage, currentPage: currentPage }))))));
    return react_1.default.createElement(PagesLayout_1.default, { page: DocContent, isLoader: isLoader });
};
exports.default = DocumentPageLayout;
