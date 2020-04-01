const db = require("../../db");

module.exports = async (req, res) => {
  try {
    const campaigns = await db.Campaigns.get();

    return res
      .status(200)
      .json(campaigns)
      .end();
  } catch (error) {
    return res.status(500).end();
  }
};
