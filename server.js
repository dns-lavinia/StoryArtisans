const db = require("./app/models");
const Role = db.role;

const dbConfig = require("./app/dbconfig/db.config");

const express = require("express");
const app = express();

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

app.get("/", (req, res) => {
  res.json({ message: "Story Artisans - Carabas Adelin & Dinis Lavinia" });
});

// routes
require("./app/routes/login.routes")(app);
require("./app/routes/user.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
