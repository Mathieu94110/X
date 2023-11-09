const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://enaultmathieu2:qwe@cluster0.wt48ajo.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connexion db ok !"))
  .catch((err) => console.log(err));
