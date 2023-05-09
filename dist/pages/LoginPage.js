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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable react-hooks/exhaustive-deps */
var react_1 = __importStar(require("react"));
// import working from "../assets/img/working.jpg";
// import LoginForm from "../components/Form/LoginForm";
// import RegisterForm from "../components/RegisterForm";
var api_1 = require("../services/api");
var google_1 = require("@react-oauth/google");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var user_1 = require("../slices/user");
var material_1 = require("@mui/material");
var web_icon = require('../assets/img/logo/hedspi-logo.jpg');
var LoginPage = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    // const [loginSwitch, setLoginSwitch] = useState(true);
    var dispatch = (0, react_redux_1.useDispatch)();
    var changeUser = function (token) {
        localStorage.setItem("HEDSPI_ASSISTANCE_USER_TOKEN", token);
    };
    (0, react_1.useEffect)(function () {
        var checkToken = localStorage.getItem("HEDSPI_ASSISTANCE_USER_TOKEN");
        if (checkToken !== "")
            navigate('/');
    }, []);
    return (react_1.default.createElement("div", { className: "w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center" },
        react_1.default.createElement("div", { className: "bg-white w-fit h-fit rounded-2xl flex items-center justify-center p-9 px-12 flex-col" },
            react_1.default.createElement("div", { className: "rounded-full shadow-md m-4 flex flex-col items-center" },
                react_1.default.createElement(material_1.Avatar, { alt: "web-icon", src: web_icon, sx: { width: 64, height: 64 } })),
            react_1.default.createElement("span", { className: "font-semibold text-md pb-1" }, "LOGIN OR SIGN UP"),
            react_1.default.createElement("span", { className: "text-sm opacity-80" }, "with"),
            react_1.default.createElement("div", { className: "py-3" },
                react_1.default.createElement(google_1.GoogleLogin, { onSuccess: function (credentialResponse) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            (0, api_1.userLogin)(credentialResponse.credential).then(function (res) {
                                dispatch((0, user_1.setUser)(res.data));
                                navigate('/');
                            });
                            changeUser(credentialResponse.credential);
                            return [2 /*return*/];
                        });
                    }); }, onError: function () {
                        console.log("Login Failed");
                    }, size: "medium" })))));
};
exports.default = LoginPage;
