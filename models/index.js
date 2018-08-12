import fs from "fs"
import path from "path"
import sequelize from "sequelize"

const db = {}
const basename = path.basename(module.filename)
const env = process.env.NODE_ENV || "development"
const sequelizeConfig = require(`${__dirname}/../../config.js`)[env]

const ORM = new sequelize(
  sequelizeConfig.database,
  sequelizeConfig.username,
  sequelizeConfig.password,
  sequelizeConfig,
)

fs
  .readdirSync(__dirname)
  .filter((file) => file.indexOf(".") !== 0 && file !== "index.js")
  .forEach((file) => {
    const model = ORM.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.ORM = ORM
db.sequelize = sequelize

module.exports = db
