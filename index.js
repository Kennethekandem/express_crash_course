const express = require("express");
const path = require("path");
const members = require("./members");
const logger = require("./middelware/logger");


const app = express();

// init middleware
// app.use(logger);

// Gets all members
app.get("/api/members", (req, res) => res.json(members));

// get single member
app.get("/api/members/:id", (req, res) => {

  const found = members.some(member => member.id === parseInt(req.params.id));

  if(found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  }else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}`});
  }

})

/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})*/

app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
