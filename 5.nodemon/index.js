const { request, response } = require('express');
const express = require('express'); //Importamos nuestra librería express

const PORT = 8000;

const app = express(); //Creamos el servidor con express

//utilizamos use para definir endpoint, y la función callback en la que cogemos la request y enviamos la response

app.use('/saludo', (req, res) => {
    res.send("Hola este es mi endpoint de saludo")
})

app.use('/movies', (req, res) => {
    const movies = [
        {name: "Cazafantamas", age: 1984},
        {name: "El señor de los anillos", age: 2001}
    ]

    res.send(movies);
})

app.use('/adios', (req, res) => {
    res.send("Hasta luego cocodrilo asdasdadasd")
})

app.use('/', (req, res) => {
    res.send("Este es mi primer endpoint con express") //Seteamos con send un mensaje de respuesta
})




app.listen(PORT, () => console.log(`listening on port: http://localhost:${PORT}`));