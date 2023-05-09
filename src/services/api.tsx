import axiosClient from "../config/axiosClient";

export const getAllSubject = axiosClient.get("/subject/all");

export const getQuestion = (page: number, per_page: number, sortBy: object) => {
  return axiosClient.get(`/question`, {
    params: { max_items_per_page: per_page, page_num: page, sortBy: sortBy },
  });
};
export const getDocument = (type: string, page: number, per_page: number, sortBy: object, filter: object) => {
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
export const getReview = (type: string, page: number, per_page: number) => {
  return axiosClient.get(`/review`, {
    params: { max_items_per_page: per_page, page_num: page, type: type },
  });
};
export const getDocumentNum = (type: string, filter: object) => {
  return axiosClient.get("/document/all", { params: { type: type, filter: filter } });
};

export const getDocumentById = (id: number) => {
  return axiosClient.get(`/document/${id}`);
}

export const getQuestionNum = axiosClient.get("/question/all");

export const getReviewNum = (type: string) => {
  return axiosClient.get("/review/all", { params: { type: type } });
};

export const getReviewCmt = (id: number) => {
  return axiosClient.get(`review/${id}`);
};

export const getQuestionCmt = (id: number) => {
  return axiosClient.get(`question/${id}`);
};

export const getDocumentCmt = (id: number) => {
  return axiosClient.get(`document/${id}/allComments`);
};

export const getSearchDocument = (title: string) => {
  return axiosClient.get(`document/search`, { params: { title: title } });
};

export const checkHasLike = (user_id: number, article_id: number, article_type: string) => {
  return axiosClient.get(`like/check`, {params: {author_id: user_id, article_id: article_id, article_type: article_type }});
}

//post method
export const postDocument = (document: any) => {
  return axiosClient.post("/document", document);
};

export const postQuestion = (question: any) => {
  return axiosClient.post("/question", question);
};

export const postReview = (review: any) => {
  return axiosClient.post("/review", review);
};

export const postComment = (comment: any) => {
  return axiosClient.post("/comment", comment);
};

export const userLogin = (credential: any) => {
  return axiosClient.post('/auth/login', {token: credential});
}

export const postLike = (user: any, article: any, article_type: any) => {
  return axiosClient.post('/like', {user: user, article: article, article_type: article_type});
}

//delete method

export const disLike = (id: number) => {
  return axiosClient.get('/like/delete', {params: {id: id}})
}