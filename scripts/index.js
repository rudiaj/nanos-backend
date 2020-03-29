require("dotenv").config();

const setCampaigns = require("./setCampaigns");

const execute = async () => {
  await setCampaigns();

  process.exit();
};

execute();
