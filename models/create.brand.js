module.exports = {
    up: function (queryInterface, DataTypes) {
      return queryInterface
        .createTable("Brands", {
          brand: {
            type: DataTypes.STRING(1000),
            allowNull: true,
            defaultValue: true
          },
          description: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false
          },
          image: {
            type: DataTypes.STRING
          }
        })
        .then(() => {
          console.log("created brands table");
        });
    },
    down: function (queryInterface, DataTypes) {
      return queryInterface.dropTable("Brands").then(() => {
        console.log("Brands table dropped");
      });
    }
  };
  