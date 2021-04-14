const express = require("express");
const path = require("path");
const exphbs = require('express-handlebars');
const logger = require("./middelware/logger");


const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// handle bars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

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
