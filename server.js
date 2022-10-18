const db = require("./app/models");
const Role = db.role;

const dbConfig = require("./app/dbconfig/db.config");

db.mongoose
  .connect(
    `mongodb+srv://${dbConfig.HOST}:${dbConfig.PASSWORD}@${dbConfig.DB}.8ayyvw3.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });
