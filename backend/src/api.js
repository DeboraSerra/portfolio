const exppress = require('express');
require('express-async-errors');
require('dotenv/config');
const serverless = require('serverless-http');
const cors = require('cors');
const projectRoute = require('./projects');

const PORT = process.env.PORT || 3001;

const app = exppress();
app.use(cors());
app.use(exppress.json());

app.use('/.netlify/functions/api/projects', projectRoute);

app.use((err, req, res, next) => {
  const { message } = err;
  res.status(500).json({ message });
})

app.listen(PORT, () => console.log(PORT));

module.exports = app;
module.exports.handler = serverless(app);
