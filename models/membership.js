module.exports = (sequelize, DataTypes) => {
    const membership= sequelize.define("membership", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
        
        
      },
      father: {
        type: DataTypes.STRING,
      },
      age: {
        type: DataTypes.INTEGER
      },
      gender:{
        type:DataTypes.STRING
      },
      voteridno:{
        type:DataTypes.INTEGER,
        primaryKey:true
      },
      assemblyconstituency:{
        type:DataTypes.STRING
      },
      district:{
        type:DataTypes.STRING
      },
      fulladdress:{
        type:DataTypes.STRING
      },
      phoneno:{
        type:DataTypes.INTEGER
      },
      email:{
        type:DataTypes.STRING,
        allowNull:false
      }
    });
    return membership;
  };