const {saluda, adios, variable} = require('./utils')

const persona = {
    nombre: "sergio",
    apellidos: "pitel",
    numeros: [1,3,5,7,9]
}

const {numeros} = persona;

console.log(variable)
// numeros()

saluda()
adios()


//filter, map, find, reduce

const arrayFiltrado = numeros.filter((elementoArray) => elementoArray > 5)
console.log(arrayFiltrado);

