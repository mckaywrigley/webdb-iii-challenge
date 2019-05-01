// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./db.lambda.db3"
    },
    useNullAsDefault: true
  }
};
