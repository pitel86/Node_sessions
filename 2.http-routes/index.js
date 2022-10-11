const http = require('http');

const PORT = 8000;

const requestHandler = (req, res) =>{
    res.setHeader('Content-Type', 'text/json');
    res.writeHeader(200);
    if(req.url == '/'){
        res.end("Esta es el endpoint /")
    }else if(req.url == "/movies"){
        res.end("Este seria el endpoint para mis peliculas")
    }else if(req.url == '/fruitis') {
        res.end("Este seria para los fruitis")
    }else if(req.url == '/fruitis/nombres'){
        res.end("Aquí viene gazpaacho, mochilo y pincho")
    }else{
        res.end("esta ruta no existe")
    }
}

const app = http.createServer(requestHandler);

app.listen(PORT, () => console.log(`listening on port http://localhost:${PORT}`));