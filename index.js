const express = require('express');
const axios = require('axios');

const app = express()

const JSONcall = async () => {
    const response = await axios.get('http://ergast.com/api/f1/current/driverStandings.json');
    console.log(response.data.MRData);
}

const XMLcall = async () => {
    const response = await axios.get('http://ergast.com/api/f1/current/driverStandings.xml');
    console.log(response.data);
}

app.get('/JSONResponse', (res, req) => {
    res.send()
})


JSONcall();
XMLcall();

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));