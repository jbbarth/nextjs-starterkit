import { Model, DataTypes } from "sequelize"
///module.exports = (sequelize, DataTypes) => {
///  var KV = sequelize.define('KV', {
///  }, {});
///  KV.associate = function(models) {
///    // associations can be defined here
///  };
///  return KV;
///};
///
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

export default KV
