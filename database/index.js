const mongoose = require("mongoose");

exports.clientPromise = mongoose
  .connect(
    "mongodb+srv://enaultmathieu2:me94110@cluster0.wt48ajo.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connexion db ok !"))
  .catch((err) => console.log(err));
