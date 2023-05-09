"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var client_1 = __importDefault(require("react-dom/client"));
require("./assets/css/dist/output.css");
var App_1 = __importDefault(require("./App"));
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var store_1 = require("./slices/store");
var rootElement = document.getElementById("root");
var root = client_1.default.createRoot(rootElement);
root.render(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
    react_1.default.createElement(react_redux_1.Provider, { store: store_1.redux_store },
        react_1.default.createElement(App_1.default, null))));
