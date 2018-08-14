import fs from "fs"
import path from "path"
import Sequelize from "sequelize"

const models = {}
const env = process.env.NODE_ENV || "development"
const config = require(`${__dirname}/../sequelize.config.js`)[env]

const sequelize = new Sequelize(config)

fs
  .readdirSync(__dirname)
  .filter((file) => file.indexOf(".") !== 0 && file !== "index.js")
  .forEach((file) => {
    const model = require(path.join(__dirname, file)).default
    models[model.name] = model.init(sequelize, Sequelize)
  })

// create associations between models
Object.keys(models).forEach(name => {
  if (typeof models[name].associate === "function") {
		models[name].associate(models)
  }
})

models.sequelize = sequelize
module.exports = models
