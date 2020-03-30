const router = require("express").Router();

const campaigns = require("./campaigns");

module.exports = () => {
  campaigns(router);

  return router;
};
