import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://backend-of-news-app.herokuapp.com/api",
});

export const getArticles = () => {
  return articlesApi.get("/articles").then((res) => {
    return res.data.articles;
  });
};
