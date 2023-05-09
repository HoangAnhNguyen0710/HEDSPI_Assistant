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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Add_1 = __importDefault(require("@mui/icons-material/Add"));
var ReviewList_1 = __importDefault(require("../components/ReviewList"));
var PagesLayout_1 = __importDefault(require("../layouts/PagesLayout"));
var prop_types_1 = __importDefault(require("prop-types"));
var react_redux_1 = require("react-redux");
var api_1 = require("../services/api");
var review_1 = require("../slices/review");
var CreateReviewForm_1 = __importDefault(require("../components/Form/CreateReviewForm"));
var Pagination_1 = __importDefault(require("../layouts/Pagination"));
function a11yProps(index) {
    return {
        id: "vertical-tab-".concat(index),
        "aria-controls": "vertical-tabpanel-".concat(index),
    };
}
function TabPanel(props) {
    var children = props.children, value = props.value, index = props.index, other = __rest(props, ["children", "value", "index"]);
    return (react_1.default.createElement("div", __assign({ role: "tabpanel", hidden: value !== index, id: "vertical-tabpanel-".concat(index), "aria-labelledby": "vertical-tab-".concat(index) }, other), value === index && react_1.default.createElement(material_1.Typography, null, children)));
}
TabPanel.propTypes = {
    children: prop_types_1.default.node,
    index: prop_types_1.default.number.isRequired,
    value: prop_types_1.default.number.isRequired,
};
var ReviewPage = function () {
    var _a = (0, react_1.useState)(0), value = _a[0], setValue = _a[1];
    var _b = (0, react_1.useState)(1), numOfPages = _b[0], setNumOfPages = _b[1];
    var _c = (0, react_1.useState)(1), currentPage = _c[0], setCurrentPage = _c[1];
    var _d = (0, react_1.useState)(true), isLoader = _d[0], setIsLoader = _d[1];
    var _e = (0, react_1.useState)(true), reloadData = _e[0], setReloadData = _e[1];
    var dispatch = (0, react_redux_1.useDispatch)();
    var reviewList = (0, react_redux_1.useSelector)(function (state) { return state.review.value; });
    var _f = (0, react_1.useState)("all"), reviewType = _f[0], setReviewType = _f[1];
    var _g = (0, react_1.useState)(false), open = _g[0], setOpen = _g[1];
    var handleOpenDialog = function () {
        setOpen(true);
    };
    var handleCloseDialog = function () {
        setOpen(false);
    };
    (0, react_1.useEffect)(function () {
        // console.log(currentPage)
        (0, api_1.getReview)(reviewType, currentPage, parseInt(process.env.REACT_APP_MAX_ITEMS_PER_PAGE))
            .then(function (res) {
            dispatch((0, review_1.setReviews)(res.data));
            setIsLoader(false);
        });
        (0, api_1.getReviewNum)(reviewType).then(function (res) { return setNumOfPages(res.data / parseInt(process.env.REACT_APP_MAX_ITEMS_PER_PAGE)); });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, reloadData]);
    // useEffect(()=> {
    //   setCurrentPage(1);
    //   setReloadData(!reloadData);
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [reviewType])
    var handleChange = function (event, newValue) {
        setValue(newValue);
        // eslint-disable-next-line default-case
        switch (newValue) {
            case 0:
                setReviewType("all");
                break;
            case 1:
                setReviewType("Review môn học");
                break;
            case 2:
                setReviewType("Review học kì");
                break;
            case 3:
                setReviewType("Review khác");
                break;
        }
        setCurrentPage(1);
        setReloadData(!reloadData);
    };
    var ReviewContent = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "min-h-screen py-16 px-10" },
            react_1.default.createElement("div", { className: "flex items-center justify-between w-full pb-6" },
                react_1.default.createElement(material_1.Breadcrumbs, { "aria-label": "breadcrumb" },
                    react_1.default.createElement(react_router_dom_1.NavLink, { to: "/", className: "text-2xl font-semibold p-3 m-3 mt-0 mr-0 sm:p-0 sm:m-0" }, "REVIEWS")),
                react_1.default.createElement("button", { className: "p-3 sm:mx-3 py-2 bg-main text-white rounded-md flex items-center text-sm font-medium hover:text-black hover:bg-gray-300", onClick: handleOpenDialog },
                    react_1.default.createElement(Add_1.default, null),
                    " ",
                    react_1.default.createElement("span", { className: "px-1" }, "VI\u1EBET REVIEW"))),
            react_1.default.createElement("div", { className: "flex" },
                react_1.default.createElement("div", { className: "hidden sm:block sm:w-1/3 md:w-1/5 h-fit py-5" },
                    react_1.default.createElement("div", { className: "flex py-3" },
                        react_1.default.createElement(material_1.Tabs, { orientation: "vertical", variant: "scrollable", value: value, onChange: handleChange, "aria-label": "Vertical tabs example", sx: { borderRight: 1, borderColor: "divider", py: 2 } },
                            react_1.default.createElement(material_1.Tab, __assign({ label: "T\u1EA5t c\u1EA3" }, a11yProps(0), { sx: { alignItems: "start", textAlign: "start", pl: 0 } })),
                            react_1.default.createElement(material_1.Tab, __assign({ label: "Review h\u1ECDc ph\u1EA7n" }, a11yProps(1), { sx: { alignItems: "start", textAlign: "start", pl: 0 } })),
                            react_1.default.createElement(material_1.Tab, __assign({ label: "Review h\u1ECDc k\u00EC" }, a11yProps(2), { sx: { alignItems: "start", textAlign: "start", pl: 0 } })),
                            react_1.default.createElement(material_1.Tab, __assign({ label: "Review kh\u00E1c" }, a11yProps(3), { sx: { alignItems: "start", textAlign: "start", pl: 0 } }))))),
                react_1.default.createElement("div", { className: "w-full sm:w-2/3 md:w-4/5 h-fit py-5" },
                    react_1.default.createElement(TabPanel, { value: value, index: 0 },
                        react_1.default.createElement(ReviewList_1.default, { reviewList: reviewList })),
                    react_1.default.createElement(TabPanel, { value: value, index: 1 },
                        react_1.default.createElement(ReviewList_1.default, { reviewList: reviewList })),
                    react_1.default.createElement(TabPanel, { value: value, index: 2 },
                        react_1.default.createElement(ReviewList_1.default, { reviewList: reviewList })),
                    react_1.default.createElement(TabPanel, { value: value, index: 3 },
                        react_1.default.createElement(ReviewList_1.default, { reviewList: reviewList })),
                    react_1.default.createElement("div", { className: "flex justify-center" },
                        react_1.default.createElement(Pagination_1.default, { totalPage: numOfPages, setPageNum: setCurrentPage, currentPage: currentPage }))))),
        react_1.default.createElement(material_1.Dialog, { open: open, onClose: handleCloseDialog },
            react_1.default.createElement(material_1.DialogContent, null,
                react_1.default.createElement("div", { className: "flex items-center justify-center" },
                    react_1.default.createElement(CreateReviewForm_1.default, { setOpen: setOpen, setReloadData: setReloadData, reloadData: reloadData }))))));
    return react_1.default.createElement(PagesLayout_1.default, { page: ReviewContent, isLoader: isLoader });
};
exports.default = ReviewPage;
