const express = require('express');
const path = require("path");


const app = express();

const members = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@mail.com',
        status: 'active'
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'janedoe@mail.com',
        status: 'in-active'
    },
    {
        id: 3,
        name: 'Jackson Doe',
        email: 'jacksondoe@mail.com',
        status: 'active'
    },

]

// Gets all members
app.get('/api/members', (req, res) => res.json(members));

/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})*/

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
