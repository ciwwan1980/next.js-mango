if (process.env.NODE_ENV === "development") {
  require("dotenv").config({});
}

module.exports = {
  env: {
    MONGO_URI: process.env.MONGO_URI,
  },
};
