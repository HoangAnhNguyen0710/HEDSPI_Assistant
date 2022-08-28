import axiosClient from "../config/axiosClient";

export const getAllSubject = axiosClient.get("/subject/all");

export const getQuestion = (page, per_page, sortBy) => {
    return axiosClient.get(`/question`, {params: {max_items_per_page: per_page, page_num: page, sortBy: sortBy}});
}
export const getDocument = (type, page, per_page, sortBy) => {
    return axiosClient.get(`/document`, {params: {max_items_per_page: per_page, page_num: page, type:type, sortBy: sortBy}});
}
export const getReview = (type, page, per_page) => {
    return axiosClient.get(`/review`, {params: {max_items_per_page: per_page, page_num: page, type:type}});
}
export const postDocument = (document) => {
    return axiosClient.post('/document', document);
}
export const getDocumentNum = (type) => {
  return axiosClient.get("/document/all", {params: {type: type}});
} 
export const getQuestionNum = axiosClient.get("/question/all");

export const getReviewNum = (type) => {
  return axiosClient.get("/review/all", {params: {type: type}});
}

//post method
export const postReview = (review) => {
  return axiosClient.post("/review", review);
}