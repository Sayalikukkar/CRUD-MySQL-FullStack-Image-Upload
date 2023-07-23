module.exports = (sequelize, DataTypes) => {
    const Brands = sequelize.define("brands", {
      brand: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: true
      },
      description: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        defaultValue: false
      },
      image: {
        type: DataTypes.STRING
      }
    });
    return Brands;
  };
  