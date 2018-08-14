if (process.env.NODE_ENV !== "production") {
  require("dotenv").load()
}

const Sequelize = require("sequelize")

const die = msg => {
  throw new Error(msg)
}

module.exports = {
  session: {
    secret: process.env.DB_SECRET || "placeholdersecret",
  },
}

if (process.env.NODE_ENV === "production") {
  module.exports.production = {
    username: process.env.DB_USERNAME || die("Please specify a DB_USERNAME"),
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE || die("Please specify a DB_DATABASE"),
    host: process.env.DB_HOST || die("Please specify a DB_HOST"),
    port: process.env.DB_PORT,
    dialect: "postgres",
    operatorsAliases: Sequelize.Op,
    migrationStorageTableName: "sequelize_meta",
  }
} else {
  module.exports.development = {
    username: process.env.DB_USERNAME || process.env.USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE || die("Please specify a DB_DATABASE"),
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    operatorsAliases: Sequelize.Op,
    migrationStorageTableName: "sequelize_meta",
  }
}
