module.exports = (sequelize, DataTypes) => {
  const FeedBack= sequelize.define("FeedBack", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
      
    },
    phoneno: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING
    },
    issues:{
      type:DataTypes.STRING
    }
  });
  return FeedBack;
};