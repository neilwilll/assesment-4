const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);
app.post('/api/users', (req, res) => {
    console.log(req.body) // { username: 'Dragon", firstName: 'Joey', lastName: 'Tribiani' }
    let username = req.body.username
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    res.status(200).send(`Welcome, ${username}! It is nice to meet you ${firstName} ${lastName}.`)
  })
app.listen(4000, () => console.log("Server running on 4000"));
