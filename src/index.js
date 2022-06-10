const app = require("./app");
const { sequelize } = require("./database/database");

async function main() {
  try {
    await sequelize.sync({ alter: false})
    app.listen(3000, () => console.log("http://localhost:3000"));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
