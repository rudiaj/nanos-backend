const models = require("./models");
const mongoose = require("./mongoose");

module.exports.mongoose = mongoose;

module.exports.Campaigns = models.campaigns;
