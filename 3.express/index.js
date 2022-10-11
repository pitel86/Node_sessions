const express = require('express'); //Importamos nuestra librería express

const PORT = 8000;

const app = express(); //Creamos el servidor con express

app.listen(PORT, () => console.log(`listening on port: http://localhost:${PORT}`));