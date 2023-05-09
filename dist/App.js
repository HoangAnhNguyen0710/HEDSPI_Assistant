"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PrivateRoutes_1 = __importDefault(require("./routes/PrivateRoutes"));
var PublicRoutes_1 = __importDefault(require("./routes/PublicRoutes"));
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
var google_1 = require("@react-oauth/google");
require("jodit/build/jodit.min.css");
var react_1 = __importDefault(require("react"));
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(google_1.GoogleOAuthProvider, { clientId: "918802200605-2dojv89dmfkphre9rokgjp341ig0hti2.apps.googleusercontent.com" },
            react_1.default.createElement(PublicRoutes_1.default, null),
            react_1.default.createElement(PrivateRoutes_1.default, null))));
}
exports.default = App;
