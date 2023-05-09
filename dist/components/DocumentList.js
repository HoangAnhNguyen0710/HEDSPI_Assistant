"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable react-hooks/exhaustive-deps */
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var Document_1 = __importDefault(require("./Document"));
var DocumentList = function (props) {
    // const dispatch = useDispatch();
    var documentList = (0, react_redux_1.useSelector)(function (state) { return state.document.value; });
    // useEffect(() => {
    //   getDocument(1, 6)
    //     .then((res) => {
    //     dispatch(setDocs(res.data));
    //     // setIsLoader(false);
    //     console.log(res);
    //   })},[])
    return (react_1.default.createElement("div", { className: "flex w-full flex-wrap py-3" }, documentList.map(function (document) {
        return react_1.default.createElement("div", { className: "w-full flex items-center justify-center lg:w-1/2 py-3 h-full", key: document.id },
            react_1.default.createElement("div", { className: "w-full hover:scale-105 transition ease-in-out delay-150 duration-200" },
                react_1.default.createElement(Document_1.default, { document: document })));
    })));
};
exports.default = DocumentList;
