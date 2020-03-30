const port = process.env.PORT || 5000;

module.exports.mongo = {
  uri: process.env.MONGO_URL,
};

module.exports.port = port;
