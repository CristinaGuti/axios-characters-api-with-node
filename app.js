require("dotenv/config");

const express = require("express");
const app = express();

const hbs = require("hbs");

require("./config")(app);

app.locals.appTitle = `axios-characters-api`;

const index = require("./routes/index.routes");
app.use("/", index);

const charactersRoutes = require("./routes/characters.routes");
app.use("/", charactersRoutes);

require("./error-handling")(app);

module.exports = app;
