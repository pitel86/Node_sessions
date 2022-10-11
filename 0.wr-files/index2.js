const pepito = require('fs');

pepito.readFile('avengers.json', (error, data) =>{
    if(error){ 
        console.log(error)
    }else{
        const avengers= JSON.parse(data)
        console.log(avengers.map((avenger) => avenger.name).join(', '))
    }
})