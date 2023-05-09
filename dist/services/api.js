"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disLike = exports.postLike = exports.userLogin = exports.postComment = exports.postReview = exports.postQuestion = exports.postDocument = exports.checkHasLike = exports.getSearchDocument = exports.getDocumentCmt = exports.getQuestionCmt = exports.getReviewCmt = exports.getReviewNum = exports.getQuestionNum = exports.getDocumentById = exports.getDocumentNum = exports.getReview = exports.getDocument = exports.getQuestion = exports.getAllSubject = void 0;
var axiosClient_1 = __importDefault(require("../config/axiosClient"));
exports.getAllSubject = axiosClient_1.default.get("/subject/all");
var getQuestion = function (page, per_page, sortBy) {
    return axiosClient_1.default.get("/question", {
        params: { max_items_per_page: per_page, page_num: page, sortBy: sortBy },
    });
};
exports.getQuestion = getQuestion;
var getDocument = function (type, page, per_page, sortBy, filter) {
    return axiosClient_1.default.get("/document", {
        params: {
            max_items_per_page: per_page,
            page_num: page,
            type: type,
            sortBy: sortBy,
            filter: filter
        },
    });
};
exports.getDocument = getDocument;
var getReview = function (type, page, per_page) {
    return axiosClient_1.default.get("/review", {
        params: { max_items_per_page: per_page, page_num: page, type: type },
    });
};
exports.getReview = getReview;
var getDocumentNum = function (type, filter) {
    return axiosClient_1.default.get("/document/all", { params: { type: type, filter: filter } });
};
exports.getDocumentNum = getDocumentNum;
var getDocumentById = function (id) {
    return axiosClient_1.default.get("/document/".concat(id));
};
exports.getDocumentById = getDocumentById;
exports.getQuestionNum = axiosClient_1.default.get("/question/all");
var getReviewNum = function (type) {
    return axiosClient_1.default.get("/review/all", { params: { type: type } });
};
exports.getReviewNum = getReviewNum;
var getReviewCmt = function (id) {
    return axiosClient_1.default.get("review/".concat(id));
};
exports.getReviewCmt = getReviewCmt;
var getQuestionCmt = function (id) {
    return axiosClient_1.default.get("question/".concat(id));
};
exports.getQuestionCmt = getQuestionCmt;
var getDocumentCmt = function (id) {
    return axiosClient_1.default.get("document/".concat(id, "/allComments"));
};
exports.getDocumentCmt = getDocumentCmt;
var getSearchDocument = function (title) {
    return axiosClient_1.default.get("document/search", { params: { title: title } });
};
exports.getSearchDocument = getSearchDocument;
var checkHasLike = function (user_id, article_id, article_type) {
    return axiosClient_1.default.get("like/check", { params: { author_id: user_id, article_id: article_id, article_type: article_type } });
};
exports.checkHasLike = checkHasLike;
//post method
var postDocument = function (document) {
    return axiosClient_1.default.post("/document", document);
};
exports.postDocument = postDocument;
var postQuestion = function (question) {
    return axiosClient_1.default.post("/question", question);
};
exports.postQuestion = postQuestion;
var postReview = function (review) {
    return axiosClient_1.default.post("/review", review);
};
exports.postReview = postReview;
var postComment = function (comment) {
    return axiosClient_1.default.post("/comment", comment);
};
exports.postComment = postComment;
var userLogin = function (credential) {
    return axiosClient_1.default.post('/auth/login', { token: credential });
};
exports.userLogin = userLogin;
var postLike = function (user, article, article_type) {
    return axiosClient_1.default.post('/like', { user: user, article: article, article_type: article_type });
};
exports.postLike = postLike;
//delete method
var disLike = function (id) {
    return axiosClient_1.default.get('/like/delete', { params: { id: id } });
};
exports.disLike = disLike;
