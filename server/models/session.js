const { Model, DataTypes } = require("sequelize")

class Session extends Model {
  static init(sequelize) {
    return super.init(
      {
        session_id: DataTypes.STRING,
        session: DataTypes.JSON,
        expire: DataTypes.DATE(6),
      },
      {
        tableName: "sessions",
        sequelize,
      },
    )
  }

  static associate(sequelize) {}
}

module.exports = {
  default: Session,
}
