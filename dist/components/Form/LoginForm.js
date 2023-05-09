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
var react_2 = require("react");
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
var PersonOutline_1 = __importDefault(require("@mui/icons-material/PersonOutline"));
var VpnKeyOutlined_1 = __importDefault(require("@mui/icons-material/VpnKeyOutlined"));
var Google_1 = __importDefault(require("@mui/icons-material/Google"));
var Facebook_1 = __importDefault(require("@mui/icons-material/Facebook"));
var LoginForm = function (props) {
    var userRef = (0, react_2.useRef)();
    var errRef = (0, react_2.useRef)();
    //   const navigate = useNavigate();
    //   const dispatch = useDispatch();
    var _a = (0, react_2.useState)(""), errMsg = _a[0], setErrMsg = _a[1];
    var _b = (0, react_2.useState)(false), remember = _b[0], setRemember = _b[1];
    var _c = (0, react_2.useState)({
        username: "",
        password: "",
    }), login = _c[0], setLogin = _c[1];
    (0, react_2.useEffect)(function () {
        userRef.current.focus();
    }, []);
    (0, react_2.useEffect)(function () {
        setErrMsg("");
    }, [login]);
    //   useEffect(()=>{
    //       const user = localStorage.getItem("");
    //       if(user) {
    //           const obj = JSON.parse(user);
    //           setLogin({email: obj, password: ""});
    //       }
    //   }, [])
    var handleChange = function (e) {
        var _a;
        setLogin(__assign(__assign({}, login), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    //   const handleSubmit = async (e: any) => {
    //     e.preventDefault();
    //     if(remember){
    //         const saveLogin = JSON.stringify(login.email);
    //         localStorage.setItem("RequestGateLoginUser", saveLogin);
    //     }
    //     axiosClient.post(`/users/login`, {
    //         email: login.email,
    //         password: login.password
    //     }).then(
    //     (res) => {
    //         console.log(res.data)
    //         const user = res.data.user;
    //         //lưu thông tin user hiện tại vào localstorage
    //         const saveUser = JSON.stringify(user.email);
    //         localStorage.setItem("RequestGateUser", saveUser);
    //         //save token
    //         const accessToken = res?.data?.accessToken;
    //         localStorage.setItem("accessToken", accessToken);
    //         //
    //         dispatch(setUser({_id: user._id, email: user.email, name: user.name, role: user.role}))
    //         navigate("/");
    //     }
    //     ).catch((err) => {
    //         if(!err?.response){
    //             setErrMsg('No server response');
    //         } else if(err.response?.status === 400) {
    //             setErrMsg("Missing Email or Password")
    //         } else if(err.response?.status === 401)
    //             setErrMsg("Unauthorized")
    //         else{
    //             setErrMsg(err.response.data)
    //         }
    //     }
    //     );
    //   }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "rounded-lg p-3 py-6 font-semibold text-slate-700 self-center text-xl text-center font-mono block" }, "LOGIN"),
        react_1.default.createElement("p", { ref: errRef, className: errMsg ? "bg-red-300  p-3" : "" }, errMsg),
        react_1.default.createElement("form", { className: "font-mono" },
            react_1.default.createElement("label", { htmlFor: "username" }, "Username"),
            react_1.default.createElement("div", { className: "border-b-2 flex items-center mb-3" },
                react_1.default.createElement(PersonOutline_1.default, null),
                react_1.default.createElement("input", { id: "username", value: login.username, type: "text", className: "border-0 block w-full h-10 mx-2", onChange: handleChange, name: "username", placeholder: "Username", ref: userRef, autoComplete: "off", required: true })),
            react_1.default.createElement("label", { htmlFor: "password" }, "Password"),
            react_1.default.createElement("div", { className: "border-b-2 flex items-center mb-3" },
                react_1.default.createElement(VpnKeyOutlined_1.default, null),
                react_1.default.createElement("input", { id: "password", value: login.password, type: "password", className: "border-0 block w-full h-10 mx-2", onChange: handleChange, name: "password", placeholder: "Password", required: true })),
            react_1.default.createElement("div", { className: "flex items-center" },
                react_1.default.createElement("input", { type: "checkbox", className: "w-5 h-5", value: remember, onChange: function () { return setRemember(!remember); } }),
                react_1.default.createElement("label", { className: "px-2 text-sm lg:text-base" }, "Remember me")),
            react_1.default.createElement("div", { className: "py-2 text-end w-full" },
                react_1.default.createElement("a", { href: "/", className: "text-sm" }, "Forgot password ?")),
            react_1.default.createElement("button", { type: "submit", className: "rounded-2xl p-3 block border-2 w-full my-2 bg-gradient-to-r from-cyan-400 to-blue-500  font-semibold text-slate-50" }, "Login")),
        react_1.default.createElement("div", { className: "py-2 text-sm text-center" },
            " ",
            "Or login with",
            react_1.default.createElement("br", null),
            react_1.default.createElement("button", { className: "text-blue-400 p-3 rounded-full" },
                react_1.default.createElement(Facebook_1.default, { fontSize: "large" })),
            react_1.default.createElement("button", { className: "text-red-400 p-3" },
                react_1.default.createElement(Google_1.default, { fontSize: "large" }))),
        react_1.default.createElement("div", { className: "py-2 text-sm text-center" },
            " ",
            "Don't have an account ?",
            " ",
            react_1.default.createElement("button", { className: "text-blue-400", onClick: function () { return props.setLoginSwitch(false); } }, "Sign up"))));
};
exports.default = LoginForm;
