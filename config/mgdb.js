// npm install mongoose  https://atinux.developpez.com/tutoriels/javascript/mongodb-nodejs-mongoose/
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://" +
      process.env.MONGO_DB_USER +
      ":" +
      process.env.MONGO_DB_USER_MDP +
      "@cluster0.xxnb8.mongodb.net/" +
      process.env.MONGO_DB_MARQUE,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() =>
    console.log(
      "Successful connection to MongoDB (FR)Connexion à MongoDB réussie !"
    )
  )
  .catch((error) => console.log(error));
