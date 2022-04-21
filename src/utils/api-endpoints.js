import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://backend-of-news-app.herokuapp.com/api",
});

export const getArticles = (user_topic) => {
  let path = "/articles";
  if (user_topic) path += `/?topic=${user_topic}`;
  return articlesApi.get(path).then((res) => {
    return res.data.articles;
  });
};
export const getTopics = () => {
  let path = "/topics";
  return articlesApi.get(path).then((res) => {
    return res.data.topics;
  });
};
