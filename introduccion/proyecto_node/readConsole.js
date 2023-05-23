const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function readConsole(callback){
    let person = {
        name: '',
        surname: '',
        age: ''
    }
    //solicitu de datos por consola
    rl.question('Introduzca su nombre: ', (answer) => {
        person.name = answer
        rl.question('Introduzca su apellido: ', (answer) => {
            person.surname = answer
            rl.question('Introduzca su edad: ', (answer) => {
                person.age = answer
                rl.close();
                callback(person);
            });
        });
    });
}

// readConsole(console.log);

module.exports = {readConsole};