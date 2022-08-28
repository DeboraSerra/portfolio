const exppress = require('express');
require('express-async-errors');
require('dotenv/config');
const cors = require('cors');
const projectRoute = require('./routes/project.route');

const PORT = process.env.PORT || 3001;

const app = exppress();
app.use(cors());
app.use(exppress.json());

app.use('/projects', projectRoute);

app.use((err, req, res, next) => {
  const { message } = err;
  res.status(500).json({ message });
})

app.listen(PORT, () => console.log(PORT));

module.exports = app;
