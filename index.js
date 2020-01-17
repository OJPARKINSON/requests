const express = require('express');
const axios = require('axios');

const app = express()

const JSONcall = async () => {
    const response = await axios.get('http://ergast.com/api/f1/current/driverStandings.json');
    return response.data;
}

const XMLcall = async () => {
    const response = await axios.get('http://ergast.com/api/f1/current/driverStandings.xml');
    return response.data;
}


app.route("/JSON")
    .get(async (req, res) => res.send(await JSONcall()));

app.route("/XML")
    .get(async (req, res) => res.send(await XMLcall()));

app.listen(5000, () => console.log(`LISTENING ON PORT ${5000}`));