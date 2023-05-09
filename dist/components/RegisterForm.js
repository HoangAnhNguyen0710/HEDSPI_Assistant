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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
var PersonOutline_1 = __importDefault(require("@mui/icons-material/PersonOutline"));
var VpnKeyOutlined_1 = __importDefault(require("@mui/icons-material/VpnKeyOutlined"));
var EmailOutlined_1 = __importDefault(require("@mui/icons-material/EmailOutlined"));
var axiosClient_1 = __importDefault(require("../config/axiosClient"));
var RegisterForm = function (props) {
    //   const userRef = useRef();
    var errRef = (0, react_2.useRef)();
    //   const navigate = useNavigate();
    //   const dispatch = useDispatch();
    var _a = (0, react_2.useState)(""), confirm = _a[0], setConfirm = _a[1];
    var _b = (0, react_2.useState)(""), errMsg = _b[0], setErrMsg = _b[1];
    var _c = (0, react_2.useState)({
        email: "",
        username: "",
        password: "",
        schoolyear: "65",
    }), signup = _c[0], setSignup = _c[1];
    (0, react_2.useEffect)(function () {
        setErrMsg("");
    }, [signup]);
    //   useEffect(()=>{
    //       const user = localStorage.getItem("");
    //       if(user) {
    //           const obj = JSON.parse(user);
    //           setSignup({email: obj, password: ""});
    //       }
    //   }, [])
    var handleChange = function (e) {
        var _a;
        setSignup(__assign(__assign({}, signup), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            e.preventDefault();
            if (signup.password !== confirm) {
                setErrMsg("Invalid password confirm !");
            }
            else {
                setErrMsg("");
                axiosClient_1.default
                    .post("/user", {
                    email: signup.email,
                    username: signup.username,
                    password: signup.password,
                    schoolyear: signup.schoolyear,
                })
                    .then(function (res) { return console.log(res); })
                    .catch(function (err) { return console.log(err); });
            }
            return [2 /*return*/];
        });
    }); };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "rounded-lg p-3 py-6 font-semibold text-slate-700 self-center text-xl text-center font-mono" }, "CREATE AN ACCOUNT"),
        react_1.default.createElement("p", { ref: errRef, className: errMsg ? "bg-red-300  p-3" : "" }, errMsg),
        react_1.default.createElement("form", { className: "font-mono", onSubmit: handleSubmit },
            react_1.default.createElement("label", { htmlFor: "email" }, "Email"),
            react_1.default.createElement("div", { className: "border-b-2 flex items-center mb-3" },
                react_1.default.createElement(EmailOutlined_1.default, null),
                react_1.default.createElement("input", { id: "email", value: signup.email, type: "email", className: "border-0 block w-full h-10 mx-2", onChange: handleChange, name: "email", placeholder: "Email", autoComplete: "off", required: true })),
            react_1.default.createElement("div", { className: "flex border-b-2 mb-2" },
                react_1.default.createElement("div", { className: "w-4/5" },
                    react_1.default.createElement("label", { htmlFor: "username" }, "Username"),
                    react_1.default.createElement("div", { className: " flex items-center mb-1" },
                        react_1.default.createElement(PersonOutline_1.default, null),
                        react_1.default.createElement("input", { id: "username", value: signup.username, type: "text", className: "border-0 block w-full h-10 mx-2", onChange: handleChange, name: "username", placeholder: "Username", autoComplete: "off", required: true }))),
                react_1.default.createElement("div", { className: "w-1/5" },
                    react_1.default.createElement("label", { htmlFor: "schoolyear" }, "Kh\u00F3a"),
                    react_1.default.createElement("div", { className: " flex items-center mb-1 h-10" },
                        react_1.default.createElement("select", { 
                            // type="select"
                            value: signup.schoolyear, onChange: handleChange, name: "schoolyear" },
                            react_1.default.createElement("option", { value: "66" }, "66"),
                            react_1.default.createElement("option", { value: "65" }, "65"),
                            react_1.default.createElement("option", { value: "64" }, "64"),
                            react_1.default.createElement("option", { value: "63" }, "63"))))),
            react_1.default.createElement("label", { htmlFor: "password" }, "Password"),
            react_1.default.createElement("div", { className: "border-b-2 flex items-center mb-3" },
                react_1.default.createElement(VpnKeyOutlined_1.default, null),
                react_1.default.createElement("input", { id: "password", value: signup.password, type: "password", className: "border-0 block w-full h-10 mx-2", onChange: handleChange, name: "password", placeholder: "Password", required: true })),
            react_1.default.createElement("label", { htmlFor: "password" }, "Confirm password"),
            react_1.default.createElement("div", { className: "border-b-2 flex items-center mb-3" },
                react_1.default.createElement(VpnKeyOutlined_1.default, null),
                react_1.default.createElement("input", { id: "password", value: confirm, type: "password", className: "border-0 block w-full h-10 mx-2", onChange: function (e) { return setConfirm(e.target.value); }, name: "confirmPassword", placeholder: "Confirm password", required: true })),
            react_1.default.createElement("button", { type: "submit", className: "rounded-2xl p-3 block border-2 w-full my-2 bg-gradient-to-r from-cyan-400 to-blue-500  font-semibold text-slate-50" }, "Sign Up")),
        react_1.default.createElement("div", { className: "py-2 text-sm" },
            " ",
            "Already have an account ?",
            " ",
            react_1.default.createElement("button", { className: "text-blue-400", onClick: function () { return props.setLoginSwitch(true); } }, "Login"))));
};
exports.default = RegisterForm;
