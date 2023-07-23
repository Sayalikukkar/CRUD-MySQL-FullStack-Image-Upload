module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "userdb",
    dialect: "mysql",
    PORT: 3306,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };