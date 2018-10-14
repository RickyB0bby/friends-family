const express = require('express');
const axios = require('axios');

const beachZips = require('./beaches')

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + 'client/build'));

app.get('/beaches/', async (req, res) => {
    res.send(beachZips.beaches)
    console.log("it went up")
   })

app.get('/userZip/:zipcode', async (req, res) => {
    let {data} = await axios.get(`https://www.zipcodeapi.com/rest/rHbf3vK3QcHE6rTMlH1JQvefQViQBVrwxeaqFmG2kIDig5rypdVYlxRPuZnGwCeN/radius.json/${req.params.zipcode}/20/mile`)
    res.json(data);
})

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`))