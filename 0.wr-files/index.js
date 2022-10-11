const fs = require('fs');
const avengers = [{
    name: 'spiderman',
    power: 70
},
{
    name: 'Dr.Strange',
    power: 80
},
{
    name: 'Hulk',
    power: 110
}]
fs.writeFile("avengers.json", JSON.stringify(avengers), () => console.log("fichero creado"))
fs.writeFile("avengers.txt", "hola soy pepito", () => console.log("fichero creado"))