"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ContactSupportOutlined_1 = __importDefault(require("@mui/icons-material/ContactSupportOutlined"));
var FacebookOutlined_1 = __importDefault(require("@mui/icons-material/FacebookOutlined"));
var AttachEmailOutlined_1 = __importDefault(require("@mui/icons-material/AttachEmailOutlined"));
var Instagram_1 = __importDefault(require("@mui/icons-material/Instagram"));
var LocalPhone_1 = __importDefault(require("@mui/icons-material/LocalPhone"));
var MenuBook_1 = __importDefault(require("@mui/icons-material/MenuBook"));
var Home_1 = __importDefault(require("@mui/icons-material/Home"));
var Topic_1 = __importDefault(require("@mui/icons-material/Topic"));
var ChatBubbleOutline_1 = __importDefault(require("@mui/icons-material/ChatBubbleOutline"));
var Info_1 = __importDefault(require("@mui/icons-material/Info"));
var logo = require("../assets/img/logo/hedspi-logo.jpg");
var Footer = function () {
    return (react_1.default.createElement("div", { className: "p-6 md:p-10 bg-main flex flex-col w-full" },
        react_1.default.createElement("div", { className: "flex md:justify-between flex-wrap" },
            react_1.default.createElement("a", { href: "/", className: "w-full md:w-1/6 flex items-center justify-center" },
                react_1.default.createElement("img", { alt: "HEDSPI LOGO", src: logo, className: "rounded-full w-1/3 md:w-fit" })),
            react_1.default.createElement("div", { className: "flex flex-col px-4 w-1/2 md:w-1/3" },
                react_1.default.createElement("span", { className: "font-semibold text-white text-xl flex items-center  py-2" },
                    react_1.default.createElement(ContactSupportOutlined_1.default, null),
                    " ",
                    react_1.default.createElement("span", { className: "pl-2" }, "Contact")),
                react_1.default.createElement("a", { rel: "stylesheet", className: "font-semibold text-white flex items-center py-2", href: "https://www.facebook.com/hoanh.hk0710/" },
                    react_1.default.createElement(FacebookOutlined_1.default, null),
                    " ",
                    react_1.default.createElement("span", { className: "pl-2" }, "Hoang Anh Nguyen")),
                react_1.default.createElement("a", { rel: "stylesheet", className: "font-semibold text-white flex items-center py-2", href: "https://www.facebook.com/uonghongminhh" },
                    react_1.default.createElement(FacebookOutlined_1.default, null),
                    " ",
                    react_1.default.createElement("span", { className: "pl-2" }, "Uong Hong Minh")),
                react_1.default.createElement("div", { className: "flex" },
                    react_1.default.createElement("a", { rel: "stylesheet", className: "font-semibold text-white flex items-center py-2", href: "/" },
                        react_1.default.createElement(AttachEmailOutlined_1.default, null),
                        " ",
                        react_1.default.createElement("span", { className: "pl-2" })),
                    react_1.default.createElement("a", { rel: "stylesheet", className: "font-semibold text-white flex items-center py-2", href: "/" },
                        react_1.default.createElement(Instagram_1.default, null),
                        " ",
                        react_1.default.createElement("span", { className: "pl-2" })),
                    react_1.default.createElement("a", { rel: "stylesheet", className: "font-semibold text-white flex items-center py-2", href: "/" },
                        react_1.default.createElement(LocalPhone_1.default, null),
                        " ",
                        react_1.default.createElement("span", { className: "pl-2" })))),
            react_1.default.createElement("div", { className: "flex flex-col px-4 w-1/2 md:w-1/3 pl-20" },
                react_1.default.createElement("span", { className: "font-semibold text-white text-xl flex items-center py-2" },
                    react_1.default.createElement(MenuBook_1.default, null),
                    " ",
                    react_1.default.createElement("span", { className: "pl-2" }, "Menu")),
                react_1.default.createElement("a", { rel: "stylesheet", className: "font-semibold text-white flex items-center py-2", href: "/" },
                    react_1.default.createElement(Home_1.default, null),
                    " ",
                    react_1.default.createElement("span", { className: "pl-2" }, "Trang ch\u1EE7")),
                react_1.default.createElement("a", { rel: "stylesheet", className: "font-semibold text-white flex items-center py-2", href: "/documents" },
                    react_1.default.createElement(Topic_1.default, null),
                    " ",
                    react_1.default.createElement("span", { className: "pl-2" }, "T\u00E0i li\u1EC7u")),
                react_1.default.createElement("a", { rel: "stylesheet", className: "font-semibold text-white flex items-center py-2", href: "/reviews" },
                    react_1.default.createElement(ChatBubbleOutline_1.default, null),
                    " ",
                    react_1.default.createElement("span", { className: "pl-2" }, "Review")),
                react_1.default.createElement("a", { rel: "stylesheet", className: "font-semibold text-white flex items-center py-2", href: "/questions" },
                    react_1.default.createElement(Info_1.default, null),
                    " ",
                    react_1.default.createElement("span", { className: "pl-2" }, "Q&A")))),
        react_1.default.createElement("div", { className: "text-center text-white font-medium my-3" }, "@2022 HEDSPI Assistant. All right reserved")));
};
exports.default = Footer;
