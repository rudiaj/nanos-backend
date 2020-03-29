const port = process.env.PORT;

module.exports.mongo = {
  uri: process.env.MONGO_URL,
};

module.exports.port = port;
