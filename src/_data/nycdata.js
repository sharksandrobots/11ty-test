// ./src/_data/posts.js
const axios = require("axios");

module.exports = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};