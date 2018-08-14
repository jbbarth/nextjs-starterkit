import { Model, DataTypes } from "sequelize"

class Session extends Model {
  static init(sequelize) {
    return super.init({
      session_id: DataTypes.STRING,
      session: DataTypes.JSON,
      expire: DataTypes.DATE(6)
    }, {
      tableName: "sessions",
      sequelize,
    })
  }

  static associate(sequelize) {
  }
}

export default Session
