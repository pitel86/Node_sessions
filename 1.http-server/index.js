const http = require('http'); //En la constante http importo mi paquete http;

const PORT = 8000; // Definimos una variable para mi puerto con el valor 8000

const requestHandler = (req, res) => {
    console.log('Request', req)
    //Creamos una función que maneja la request y response en nuestras peticiones a nuestra app
    //req --> request que es la petición que recibe
    //res --> response que es la petición que devuelve
    res.setHeader('Content-Type', 'text/json');  //Definimos que nuestra response tenga una cabecera en el que el tipo de respuesta es text/json

    res.writeHead(202); // Estado de la respuesta --> He recibido tu petición y te respondo que OK

    res.end("Servidor funcionando") //Enviamos el texto final

}

const app = http.createServer(requestHandler);  //Creamos un servidor con las respuestas definidas en requestHandler


app.listen(PORT, () => console.log(`SERVER STARTED IN http://localhost:${PORT}`));
