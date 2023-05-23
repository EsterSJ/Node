const { readConsole } = require('./readConsole');
const { writeAndRead } = require('./writeAndReadObject');

let person = {
    name: "Ester",
    surname: "Sanchez",
    age: 38
}

let path = "fichero.json";

//funcion independiente que lee y escribe en un fichero un objeto creado a mano
//writeAndRead("fichero.json",person);

//funcion independiente que lee y escribe un objeto con atributos leidos de consola
// readConsole((person) => {writeAndRead(path,person)});