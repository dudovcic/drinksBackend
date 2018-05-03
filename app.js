const express =  require('express');
const bp = require('body-parser');
const request = require('request');

const app = express();

app.use(bp.urlencoded({ extended: true}));


app.get('/events/', (req, res) => {
  request.get(`https://mock-api.drinks.test.siliconrhino.io/events?search=${req.query.search || ''}`, (err, request, body) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(body);
  })
});

app.get('/event/:id', (req, res) => {
  request.get(`https://mock-api.drinks.test.siliconrhino.io/events/${req.params.id}`, (err, request, body) => {
    res.send(body);
  })
});

app.listen(3000);
