import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://backend-of-news-app.herokuapp.com/api",
});

export const getArticles = (user_topic, user_sort_by) => {
  return articlesApi
    .get("/articles", {
      params: { topic: user_topic, sort_by: user_sort_by },
    })
    .then((res) => {
      return res.data.articles;
    });
};
