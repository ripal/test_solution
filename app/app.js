"use strict";

try {
  // -----------------------------------------
  // Third Party Module Dependencies.
  // -----------------------------------------
  let express = require("express");
  let helmet = require("helmet");
  let bodyParser = require("body-parser");
  let cors = require("cors");

  // ----------Importing routes files----------

  let middlewareRoutes = require("./routes/index");

  // ----------------Bootstraping app--------------------

  let app = express();

  // Secure the web application with helmet.
  app.use(helmet());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false,
  }));

  app.use("/mdw", middlewareRoutes);

  // ----------------Error handling---------------

  console.log("Setup 404:Not found converters.");
  app.use((req, res, next) => {
    let err = new Error("Not Found");

    err.status = 404;
    next(err);
  });

  console.log("Setup 500:Internal Server Error converters.");
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    console.log(err);
  });

  process.on("unhandledRejection", (err, p) => {
    console.log(err);
  });

  module.exports = app;
}
catch (e) {
  console.error(e);
}
