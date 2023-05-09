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
var react_1 = __importStar(require("react"));
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var CreateDocument_1 = __importDefault(require("../components/Form/CreateDocument"));
var PagesLayout_1 = __importDefault(require("../layouts/PagesLayout"));
var CreateDocumentPage = function () {
    var _a = (0, react_1.useState)(true), isLoader = _a[0], setIsLoader = _a[1];
    var user = (0, react_redux_1.useSelector)(function (state) { return state.user.value; });
    var navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(function () {
        setTimeout(function () {
            if (user !== null)
                setIsLoader(false);
            else {
                alert("Vui lòng đăng nhập để thực hiện chức năng này");
                navigate('/');
            }
        }, 1500);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);
    var PageContent = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "min-h-screen py-20" },
            react_1.default.createElement("div", { className: "flex items-center justify-center" },
                react_1.default.createElement(CreateDocument_1.default, null)))));
    return react_1.default.createElement(PagesLayout_1.default, { page: PageContent, isLoader: isLoader });
};
exports.default = CreateDocumentPage;
