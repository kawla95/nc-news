import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://backend-of-news-app.herokuapp.com/api",
});

export const getArticles = (user_topic, user_sort_by, user_order) => {
  let path = "/articles";
  path += `?order=${user_order || "DESC"}`;
  if (user_sort_by) path += `&sort_by=${user_sort_by}`;
  if (user_topic) path += `&topic=${user_topic}`;
  return articlesApi.get(path).then((res) => {
    return res.data.articles;
  });
};

export const getArticleById = (articleId) => {
  return articlesApi.get(`/articles/${articleId}`).then((res) => {
    return res.data.article;
  });
};

export const getArticleComments = (articleId) => {
  return articlesApi.get(`/articles/${articleId}/comments`).then((res) => {
    return res.data;
  });
};
export const postNewComment = (articleId, reqBody) => {
  return articlesApi
    .post(`/articles/${articleId}/comments`, reqBody)
    .then((res) => {
      return res;
    });
};
export const deleteComment = (comment_id) => {
  return articlesApi.delete(`/comments/${comment_id}`).then((res) => {
    return res;
  });
};
export const patchArticleVotes = (article_id) => {
  return articlesApi
    .patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then((res) => {
      return res;
    });
};
