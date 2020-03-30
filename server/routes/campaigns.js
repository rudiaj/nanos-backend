const { campaigns } = require("../controllers");

module.exports = router => {
  router.get("/api/v1/campaigns", campaigns.get);
};
