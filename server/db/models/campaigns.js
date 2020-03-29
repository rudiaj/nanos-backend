const _ = require("lodash");
const mongoose = require("mongoose");

const schemaTypes = require("./schemaTypes");

const { Schema } = mongoose;

const Campaigns = mongoose.model(
  "campaigns",
  new Schema(
    {
      name: schemaTypes.string(),
      goal: schemaTypes.string(),
      total_budget: schemaTypes.number(),
      status: schemaTypes.string(),
      platforms: Schema.Types.Mixed,

      __v: schemaTypes.number({ select: false }),
      createdAt: schemaTypes.date({ select: false }),
      updatedAt: schemaTypes.date({ select: false })
    },
    { timestamps: true }
  )
);

module.exports.isValid = values => !Campaigns(values).validateSync();

module.exports.create = values => {
  const campaign = _.omit(values, ["_id"]);

  return Campaigns(campaign).save();
};

module.exports.get = () => Campaigns.find();
