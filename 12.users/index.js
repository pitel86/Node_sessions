const express = require('express');
const dotenv = require('dotenv');
const {connect} = require('./src/utils/database');

const modeloRouter = require('./src/api/routes/modelo.routes');
const marcaRouter = require('./src/api/routes/marca.routes');
const userRouter = require('./src/api/routes/users.routes');

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();
connect();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/modelos', modeloRouter);

app.use('/marcas', marcaRouter);

app.use('/users', userRouter);

app.listen(PORT, () => console.log(`listening on port: http://localhost:${PORT}`));