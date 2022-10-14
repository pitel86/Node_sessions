const express = require('express');
const dotenv = require('dotenv');

const {connect} = require('./src/utils/database');
const fruitsRouter = require('./src/api/routes/fruitis.routes');
const PORT = process.env.PORT || 8000;
dotenv.config();

const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/fruitis', fruitsRouter);
app.listen(PORT, () => console.log(`listening on port: http://localhost:${PORT}`));