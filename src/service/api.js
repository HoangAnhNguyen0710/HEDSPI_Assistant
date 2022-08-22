import axiosClient from "../config/axiosClient";

export const getAllSubject = axiosClient.get("/subject/all");
export const getQuestion = (page, per_page) => {
    return axiosClient.get(`/question`, {params: {max_items_per_page: per_page, page_num: page}});
}