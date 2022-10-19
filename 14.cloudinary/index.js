const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {connect} = require('./src/utils/database');
const {isAuth} = require('./src/middlewares/auth');


const cloudinary = require('cloudinary').v2;


const modeloRouter = require('./src/api/routes/modelo.routes');
const marcaRouter = require('./src/api/routes/marca.routes');
const userRouter = require('./src/api/routes/users.routes');
const { restart } = require('nodemon');

dotenv.config();
const PORT = process.env.PORT || 8000;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
});

const app = express();
connect();


//Medidas de seguridad
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Method', 'POST, GET, DELETE, PUT, PATCH'); //Definimos los metodos que permitimos en nuestra API
    res.header("Access-Control-Allow-Credentials", "true") //Decimos que permitimos la conexion con credenciales
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
})

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:4200", "https://pepitoperez.com"], //Permitimos conexiones desde estas urls
    credentials: true
}))



app.use(express.json({limit: "5mb"}));
app.use(express.urlencoded({ extended: false }));


app.use('/modelos', modeloRouter);

app.use('/marcas',  marcaRouter);

app.use('/users', userRouter);


app.use('*', (req,res,next) => {
    return res.status(404).json("Route not found")
})


app.use((error, req, res, next) => {
    return res.status( error.status || 500 ).json("Error: " + error.message || "Unexpected error");
})

app.listen(PORT, () => console.log(`listening on port: http://localhost:${PORT}`));