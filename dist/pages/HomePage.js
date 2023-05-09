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
var react_1 = __importDefault(require("react"));
var PagesLayout_1 = __importDefault(require("../layouts/PagesLayout"));
require("../assets/css/style.css");
var react_slick_1 = __importDefault(require("react-slick"));
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
var ArrowBackIosOutlined_1 = __importDefault(require("@mui/icons-material/ArrowBackIosOutlined"));
var ArrowForwardIosOutlined_1 = __importDefault(require("@mui/icons-material/ArrowForwardIosOutlined"));
var react_router_dom_1 = require("react-router-dom");
var DocumentList_1 = __importDefault(require("../components/DocumentList"));
var QuestionList_1 = __importDefault(require("../components/QuestionList"));
var react_2 = require("react");
var api_1 = require("../services/api");
var question_1 = require("../slices/question");
var react_redux_1 = require("react-redux");
var react_3 = require("react");
var document_1 = require("../slices/document");
var anhCLB = require("../assets/img/clb.jpg");
var review = require("../assets/img/review.png");
var document = require("../assets/img/book.png");
var banner = require("../assets/img/banner.jpg");
var qa = require("../assets/img/qa.png");
function PrevArrow(props) {
    var onClick = props.onClick;
    return (react_1.default.createElement("div", { className: "absolute top-1/2 z-20", onClick: onClick },
        react_1.default.createElement(ArrowBackIosOutlined_1.default, { sx: { width: "2rem", height: "2rem" } })));
}
function NextArrow(props) {
    var onClick = props.onClick;
    return (react_1.default.createElement("div", { className: "absolute top-1/2 right-0 z-20", onClick: onClick },
        react_1.default.createElement(ArrowForwardIosOutlined_1.default, { sx: { width: "2rem", height: "2rem" } })));
}
var HomePage = function () {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: react_1.default.createElement(NextArrow, null),
        prevArrow: react_1.default.createElement(PrevArrow, null),
    };
    var dispatch = (0, react_redux_1.useDispatch)();
    var _a = (0, react_3.useState)(true), isLoader = _a[0], setIsLoader = _a[1];
    var maxItems = parseInt(process.env.REACT_APP_MAX_ITEMS_PER_PAGE);
    (0, react_2.useEffect)(function () {
        (0, api_1.getQuestion)(1, maxItems, { dateCreated: "DESC" })
            .then(function (res) {
            dispatch((0, question_1.setQuestions)(res.data));
        })
            .catch(function (err) { return console.log(err); });
        (0, api_1.getDocument)("all", 1, maxItems, { dateCreated: "DESC" }, {})
            .then(function (res) {
            dispatch((0, document_1.setDocs)(res.data));
            setIsLoader(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var HomeContent = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "min-h-fit py-8 box-border" },
            react_1.default.createElement("div", { className: "md:mx-10 my-8 relative md:h-fit" },
                react_1.default.createElement("div", { className: " bg-gradient-to-t from-slate-50 to-black absolute h-full w-full top-0 left-0 z-10 opacity-40" }),
                react_1.default.createElement("div", { className: "w-full" },
                    react_1.default.createElement(react_slick_1.default, __assign({}, settings),
                        react_1.default.createElement("div", { className: "" },
                            react_1.default.createElement("img", { alt: "", src: anhCLB, className: "h-auto" })),
                        react_1.default.createElement("div", { className: "" },
                            react_1.default.createElement("img", { alt: "", src: anhCLB, className: "h-auto" })),
                        react_1.default.createElement("div", { className: "" },
                            react_1.default.createElement("img", { alt: "", src: anhCLB, className: "h-auto" })))),
                react_1.default.createElement("div", { className: "absolute top-0 text-white z-20 font-sans text-2xl font-medium p-3" }, "Ph\u00E1t tri\u1EC3n b\u1EDFi \u0111\u1ED9i ng\u0169 HEDSPI NICHIBU")),
            react_1.default.createElement("div", { className: "p-6 text-center text-3xl font-bold uppercase" }, "C\u00F3 g\u00EC \u1EDF HEDSPI ASSISTANT ?"),
            react_1.default.createElement("div", { className: "flex flex-wrap justify-center md:flex-nowrap p-9" },
                react_1.default.createElement("div", { className: "w-4/5 md:w-1/3 lg:w-1/3 p-3 m-3 shadow-lg min-h-fit flex flex-col items-center justify-between rounded-md" },
                    react_1.default.createElement("span", { className: "text-xl font-medium" }, "Kho t\u00E0i li\u1EC7u, \u0111\u1EC1 thi phong ph\u00FA"),
                    react_1.default.createElement("img", { alt: "", src: document, className: "w-1/2 p-4" }),
                    react_1.default.createElement(react_router_dom_1.NavLink, { to: "/documents", className: " p-3 bg-main text-white rounded-3xl hover:bg-cyan-400 hover:text-slate-800 hover:scale-110 transition ease-in-out delay-150 duration-300" }, "Kh\u00E1m ph\u00E1")),
                react_1.default.createElement("div", { className: "w-4/5 md:w-1/3 lg:w-1/3 p-3 m-3 shadow-lg min-h-fit flex flex-col items-center justify-between rounded-md" },
                    react_1.default.createElement("span", { className: "text-xl font-medium" }, "Review m\u00F4n h\u1ECDc t\u1EEB nh\u1EEFng ng\u01B0\u1EDDi \u0111i tr\u01B0\u1EDBc"),
                    react_1.default.createElement("img", { alt: "", src: review, className: "w-1/2 p-3 pb-4" }),
                    react_1.default.createElement(react_router_dom_1.NavLink, { to: "/reviews", className: " p-3 bg-main text-white rounded-3xl hover:bg-cyan-400 hover:text-slate-800 hover:scale-110 transition ease-in-out delay-150 duration-300" }, "Kh\u00E1m ph\u00E1")),
                react_1.default.createElement("div", { className: "w-4/5 md:w-1/3 lg:w-1/3 p-3 m-3 shadow-lg min-h-fit flex flex-col items-center justify-between rounded-md" },
                    react_1.default.createElement("span", { className: "text-xl font-medium" }, "Gi\u1EA3i \u0111\u00E1p v\u01B0\u1EDBng b\u1EADn c\u00F9ng c\u00E1c b\u1EADc ti\u1EC1n b\u1ED1i"),
                    react_1.default.createElement("img", { alt: "", src: qa, className: "w-1/2 p-3" }),
                    react_1.default.createElement(react_router_dom_1.NavLink, { to: "/questions", className: " p-3 bg-main text-white rounded-3xl hover:bg-cyan-400 hover:text-slate-800 hover:scale-110 transition ease-in-out delay-150 duration-300" }, "Kh\u00E1m ph\u00E1")))),
        react_1.default.createElement("div", { className: "p-6 px-9" },
            react_1.default.createElement("div", { className: "text-3xl font-bold p-3" }, "TRENDING (T\u00C0I LI\u1EC6U \u0110\u01AF\u1EE2C T\u00CCM KI\u1EBEM NHI\u1EC0U NH\u1EA4T)"),
            react_1.default.createElement(DocumentList_1.default, { filter: "trending" }),
            react_1.default.createElement("div", { className: "text-3xl font-bold p-3" }, "BEST DOCS (T\u00C0I LI\u1EC6U \u0110\u01AF\u1EE2C \u0110\u00C1NH GI\u00C1 CAO NH\u1EA4T)"),
            react_1.default.createElement(DocumentList_1.default, { filter: "best" }),
            react_1.default.createElement("div", { className: "text-3xl font-bold p-3" }, "C\u00C2U H\u1ECEI \u0110\u01AF\u1EE2C QUAN T\u00C2M "),
            react_1.default.createElement(QuestionList_1.default, null),
            react_1.default.createElement("div", { className: "flex items-center justify-center p-3" },
                react_1.default.createElement("img", { alt: "", src: banner, className: "rounded-2xl" })))));
    return react_1.default.createElement(PagesLayout_1.default, { page: HomeContent, isLoader: isLoader });
};
exports.default = HomePage;
