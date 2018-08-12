'use strict';
module.exports = (sequelize, DataTypes) => {
  var Session = sequelize.define('Session', {
    session_id: DataTypes.STRING,
    session: DataTypes.JSON,
    expire: DataTypes.DATE(6)
  }, {});
  Session.associate = function(models) {
    // associations can be defined here
  };
  return Session;
};
