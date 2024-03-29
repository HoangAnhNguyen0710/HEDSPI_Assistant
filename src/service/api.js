import axiosClient from "../config/axiosClient";

export const getAllSubject = axiosClient.get("/subject/all");

export const getQuestion = (page, per_page, sortBy) => {
  return axiosClient.get(`/question`, {
    params: { max_items_per_page: per_page, page_num: page, sortBy: sortBy },
  });
};
export const getDocument = (type, page, per_page, sortBy, filter) => {
  return axiosClient.get(`/document`, {
    params: {
      max_items_per_page: per_page,
      page_num: page,
      type: type,
      sortBy: sortBy,
      filter: filter
    },
  });
};
export const getReview = (type, page, per_page) => {
  return axiosClient.get(`/review`, {
    params: { max_items_per_page: per_page, page_num: page, type: type },
  });
};
export const getDocumentNum = (type, filter) => {
  return axiosClient.get("/document/all", { params: { type: type, filter: filter } });
};

export const getDocumentById = (id) => {
  return axiosClient.get(`/document/${id}`);
}

export const getQuestionNum = axiosClient.get("/question/all");

export const getReviewNum = (type) => {
  return axiosClient.get("/review/all", { params: { type: type } });
};

export const getReviewCmt = (id) => {
  return axiosClient.get(`review/${id}`);
};

export const getQuestionCmt = (id) => {
  return axiosClient.get(`question/${id}`);
};

export const getDocumentCmt = (id) => {
  return axiosClient.get(`document/${id}/allComments`);
};

export const getSearchDocument = (title) => {
  return axiosClient.get(`document/search`, { params: { title: title } });
};

export const checkHasLike = (user_id, article_id, article_type) => {
  return axiosClient.get(`like/check`, {params: {author_id: user_id, article_id: article_id, article_type: article_type }});
}

//post method
export const postDocument = (document) => {
  return axiosClient.post("/document", document);
};

export const postQuestion = (question) => {
  return axiosClient.post("/question", question);
};

export const postReview = (review) => {
  return axiosClient.post("/review", review);
};

export const postComment = (comment) => {
  return axiosClient.post("/comment", comment);
};

export const userLogin = (credential) => {
  return axiosClient.post('/auth/login', {token: credential});
}

export const postLike = (user, article, article_type) => {
  console.log(user, article, article_type);
  return axiosClient.post('/like', {user: user, article: article, article_type: article_type});
}

//delete method

export const disLike = (id) => {
  return axiosClient.get('/like/delete', {params: {id: id}})
}