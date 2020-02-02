const express = require('express');
const axios = require('axios');
var bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}));

const JSONcall = async () => {
    const response = await axios.get('http://ergast.com/api/f1/current/driverStandings.json');
    return response.data;
}

const XMLcall = async () => {
    const response = await axios.get('http://ergast.com/api/f1/current/driverStandings.xml');
    return response.data;
}


app.route("/JSON")
    .get(async (req, res) => res.send(await JSONcall()))
    .post((req, res) => {
        console.log(req.body);
        res.send(`Welcome ${req.body.first_name}`)
    });

app.route("/XML")
    .get(async (req, res) => res.send(await XMLcall()))
    .post((req, res) => {
        console.log(req.body);
        res.send(`Welcome ${req.body.first_name}`)
    });

app.listen(5000, () => console.log(`LISTENING ON PORT ${5000}`));