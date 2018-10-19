const express = require('express');
const axios = require('axios');
const key = require('./config');
const beachZips = require('./beaches');

const zipKey = key.api.zipKey

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/client/build'));

app.get('/beaches/', async (req, res) => {
    res.send(beachZips.beaches)
    console.log("it went up")
})

app.get('/userZip/:zipcode', async (req, res) => {
    let {data} = await axios.get(`https://www.zipcodeapi.com/rest/${zipKey}/radius.json/${req.params.zipcode}/20/mile`).catch((err) => console.log(err))
    res.json(data);
})

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`))
