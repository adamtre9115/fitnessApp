const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const cors = require('cors');
const db = require("./models");
const routes = require("./routes");

const PORT = process.env.PORT || 3300;

// initialize express
const app = express();

// allow cross-origin access
app.use(cors());

// parse data from the client similar to body-parser
app.use(express.json());

app.use("/", routes);

// send every request to react
app.get("*", function(req, res) {
});


db.sequelize.sync().then( () => {
    app.listen(PORT, () => {
        console.log(`Server now listening on ${PORT}`);
      });
})