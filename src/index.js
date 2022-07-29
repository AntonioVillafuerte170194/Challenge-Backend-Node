import app from "./app.js";
import { sequelize } from "./database/database.js";
async function main() {
  try {
    await sequelize.sync({
      force: false,
    });
    console.log("connection has been established successfully");
    app.listen(4000);
    console.log("server port 4000");
  } catch (error) {
    console.error("unable to connect to the database:", error);
  }
}
main();
