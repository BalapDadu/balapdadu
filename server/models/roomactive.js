'use strict'
module.exports = (sequelize, DataTypes) => {
  const RoomActive = sequelize.define(
    'RoomActive',
    {
      UserId: DataTypes.INTEGER,
      RoomId: DataTypes.INTEGER
    },
    {}
  )
  RoomActive.associate = function(models) {
    // associations can be defined here
    RoomActive.belongsTo(models.Room)
  }
  return RoomActive
}
