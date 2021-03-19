const express = require('express');
const fetchData = require('./scraper')


const middlewares = require('./middlewares');

const app = express();

app.use(express.json());

app.get('/Paris', async (req, res) => {
  const data = await fetchData();
  res.json(data);
});


app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;