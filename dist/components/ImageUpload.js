"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var firebaseConfig_1 = require("../config/firebaseConfig");
var storage_1 = require("firebase/storage");
var material_ui_dropzone_1 = require("material-ui-dropzone");
var ImageUploader = function (props) {
    var document = props.document;
    var _a = (0, react_2.useState)([]), imageUpload = _a[0], setImageUpload = _a[1];
    // const [imageUrls, setImageUrls] = useState([]);
    // const imagesListRef = ref(storage, "images/");
    var uploadFile = function () {
        if (imageUpload.length === 0)
            return;
        for (var i = 0; i < imageUpload.length; i++) {
            var imageRef = (0, storage_1.ref)(firebaseConfig_1.storage, "".concat(document.subject.name, "/").concat(document.author.name, "/").concat(imageUpload[i].name));
            (0, storage_1.uploadBytes)(imageRef, imageUpload[i]).then(function (snapshot) {
                props.setIsUploaded(!props.isUploaded);
                console.log("success");
            });
        }
        setImageUpload([]);
        // props.setUpload(false);
    };
    (0, react_2.useEffect)(function () {
        // console.log(props: any);
        uploadFile();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.upload]);
    var handleChange = function (files) {
        setImageUpload(files);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "" },
            react_1.default.createElement(material_ui_dropzone_1.DropzoneArea, { onChange: handleChange, filesLimit: 10, acceptedFiles: ["image/*"], dropzoneText: "Thả nhẹ 1 hoặc 1 vài ảnh vào đây nào", 
                // showFileNames={true}
                // useChipsForPreview={true}
                // showPreviews={false}
                // clearOnUnmount={true}
                initialFiles: imageUpload, showPreviewsInDropzone: true }))));
};
exports.default = ImageUploader;
