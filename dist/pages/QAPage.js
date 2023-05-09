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
var PagesLayout_1 = __importDefault(require("../layouts/PagesLayout"));
var Add_1 = __importDefault(require("@mui/icons-material/Add"));
var Question_1 = __importDefault(require("../components/Question"));
var CreateQuestionForm_1 = __importDefault(require("../components/Form/CreateQuestionForm"));
var react_2 = require("react");
var api_1 = require("../services/api");
var question_1 = require("../slices/question");
var react_redux_1 = require("react-redux");
var Pagination_1 = __importDefault(require("../layouts/Pagination"));
var QAPage = function () {
    var questionList = (0, react_redux_1.useSelector)(function (state) { return state.question.value; });
    var dispatch = (0, react_redux_1.useDispatch)();
    var _a = (0, react_1.useState)(1), numOfPages = _a[0], setNumOfPages = _a[1];
    var _b = (0, react_1.useState)(1), currentPage = _b[0], setCurrentPage = _b[1];
    var _c = (0, react_1.useState)(true), isLoader = _c[0], setIsLoader = _c[1];
    var _d = react_1.default.useState("left"), alignment = _d[0], setAlignment = _d[1];
    var _e = react_1.default.useState(false), open = _e[0], setOpen = _e[1];
    var _f = (0, react_1.useState)({
        createdAt: "DESC"
    }), sort = _f[0], setSort = _f[1];
    (0, react_2.useEffect)(function () {
        (0, api_1.getQuestion)(currentPage, parseInt(process.env.REACT_APP_MAX_ITEMS_PER_PAGE), sort)
            .then(function (res) {
            dispatch((0, question_1.setQuestions)(res.data));
            setIsLoader(false);
        })
            .catch(function (err) { return console.log(err); });
        api_1.getQuestionNum.then(function (res) { return setNumOfPages(res.data / parseInt(process.env.REACT_APP_MAX_ITEMS_PER_PAGE)); });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, alignment]);
    var handleAlignment = function (event, newAlignment) {
        setAlignment(newAlignment);
        setCurrentPage(1);
        switch (newAlignment) {
            case "center":
                setSort({
                    createdAt: "ASC",
                    // likes: ""
                });
                break;
            case "right":
                setSort({
                    // createdAt: "",
                    likes: "DESC"
                });
                break;
            default:
                setSort({
                    createdAt: "DESC",
                });
                break;
        }
    };
    var handleOpenDialog = function () {
        setOpen(true);
    };
    var handleCloseDialog = function () {
        setOpen(false);
    };
    var QAContent = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "h-fit py-16 px-10" },
            react_1.default.createElement("div", { className: "flex items-center justify-between w-full pb-6" },
                react_1.default.createElement(material_1.Breadcrumbs, { "aria-label": "breadcrumb" },
                    react_1.default.createElement(react_router_dom_1.NavLink, { to: "/", className: "text-2xl font-semibold p-3 m-3 mt-0 mr-0 sm:p-0 sm:m-0" }, "Q&A")),
                react_1.default.createElement("button", { className: "p-3 py-2 bg-main text-white rounded-md flex items-center text-sm font-medium hover:text-black hover:bg-gray-300", onClick: handleOpenDialog },
                    react_1.default.createElement(Add_1.default, null),
                    " ",
                    react_1.default.createElement("span", { className: "px-1" }, "T\u1EA0O TOPIC"))),
            react_1.default.createElement(material_1.Divider, null),
            react_1.default.createElement("div", { className: "py-4" },
                react_1.default.createElement("div", { className: "w-fit rounded-md" },
                    react_1.default.createElement(material_1.ToggleButtonGroup, { value: alignment, onChange: handleAlignment, "aria-label": "text alignment", exclusive: true, color: "standard" },
                        react_1.default.createElement(material_1.ToggleButton, { value: "left", "aria-label": "left aligned", sx: { paddingY: 1, paddingX: 2 } },
                            react_1.default.createElement("span", { className: "text-black text-sm" }, "M\u1EDAI NH\u1EA4T")),
                        react_1.default.createElement(material_1.ToggleButton, { value: "center", "aria-label": "centered", sx: { paddingY: 1, paddingX: 2 } },
                            react_1.default.createElement("span", { className: "text-black text-sm" }, "C\u0168 NH\u1EA4T")),
                        react_1.default.createElement(material_1.ToggleButton, { value: "right", "aria-label": "right aligned", sx: { paddingY: 1, paddingX: 2 } },
                            react_1.default.createElement("span", { className: "text-black text-sm" }, "N\u1ED4I B\u1EACT")))))),
        react_1.default.createElement("div", { className: "h-full flex flex-col justify-between" },
            react_1.default.createElement("div", null, questionList !== null ? (questionList.map(function (question) { return (react_1.default.createElement("div", { className: "mr-6 mx-6 pr-7 pb-5", key: question.id },
                react_1.default.createElement(Question_1.default, { question: question }))); })) : (react_1.default.createElement(react_1.default.Fragment, null))),
            react_1.default.createElement(Pagination_1.default, { totalPage: numOfPages, setPageNum: setCurrentPage, currentPage: currentPage })),
        react_1.default.createElement(material_1.Dialog, { open: open, onClose: handleCloseDialog },
            react_1.default.createElement(material_1.DialogContent, null,
                react_1.default.createElement("div", { className: "flex items-center justify-center" },
                    react_1.default.createElement(CreateQuestionForm_1.default
                    //  setOpen={setOpen} 
                    , null))))));
    return react_1.default.createElement(PagesLayout_1.default, { page: QAContent, isLoader: isLoader });
};
exports.default = QAPage;
