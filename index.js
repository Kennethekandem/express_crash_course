const express = require("express");
const path = require("path");
const logger = require("./middelware/logger");


const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// init middleware
// app.use(logger);

/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})*/

app.use(express.static(path.join(__dirname, "public")));

// members API routes
app.use('/api/members', require('./routes/api/members'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
