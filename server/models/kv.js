const { Model, DataTypes } = require("sequelize")

class KV extends Model {
  static init(sequelize) {
    return super.init(
      {
        key: {
          type: DataTypes.STRING,
          // field: 'key',
          unique: "kv_key_index",
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        value: DataTypes.JSON,
      },
      {
        tableName: "kvs",
        sequelize,
      },
    )
  }

  static associate(sequelize) {}
}

module.exports = {
  default: KV,
}
