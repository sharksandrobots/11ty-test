const axios = require("axios");

module.exports = async () => {
  const res = await axios.get("https://data.cityofnewyork.us/resource/jb7j-dtam.json");
  return res.data;
};