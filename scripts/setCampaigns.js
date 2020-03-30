const db = require("../server/db");

const  initialCampaigns = require("./initialCampaigns");

module.exports = async () => {

  try{
    await db.Campaigns.deleteAll();

    const [campaigns] = await Promise.all([
      db.Campaigns.create(initialCampaigns[0]),
      db.Campaigns.create(initialCampaigns[1]),
      db.Campaigns.create(initialCampaigns[2])
    ]);

    await campaigns.save();
  }
  catch(error){
    console.log(error)
  }
};
