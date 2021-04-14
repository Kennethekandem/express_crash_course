const express = require("express");
const path = require("path");
const members = require("./members");
const moment = require("moment");

const app = express();

const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    } : ${moment().format()}`
  );
  next();
};

// init middleware
app.use(logger);

// Gets all members
app.get("/api/members", (req, res) => res.json(members));

/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})*/

app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
