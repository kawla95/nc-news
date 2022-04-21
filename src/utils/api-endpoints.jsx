import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://backend-of-news-app.herokuapp.com/api",
});

export const getArticles = (user_order, user_sort_by, user_topic) => {
  let path = "/articles";
  path += `?order=${user_order || "DESC"}`;
  if (user_sort_by) path += `&sort_by=${user_sort_by}`;
  if (user_topic) path += `&topic=${user_topic}`;
  return articlesApi.get(path).then((res) => {
    return res.data.articles;
  });
};
