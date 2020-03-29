const { campaigns } = require("../../controllers");

// const { paths } = require("../../../common/constants");

module.exports = router => {
  router.get("/api/v1/campaigns", campaigns.get);
};
