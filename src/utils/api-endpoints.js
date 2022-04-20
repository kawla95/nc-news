import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://backend-of-news-app.herokuapp.com/api",
});

export const getArticles = (user_topic, user_sort_by, user_order) => {
  let path = "/articles?";
  if (user_topic) path += `topic=${user_topic}`;
  if (user_sort_by) path += `&&sort_by=${user_sort_by}`;
  user_order ? (path += `&&order=${user_order}`) : (path += `&&order=DESC`);
  return articlesApi.get(path).then((res) => {
    return res.data.articles;
  });
};
