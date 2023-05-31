const fs = require ('fs');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

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
            //escritura del objeto en el fichero .json
            fs.writeFile("reto2.json", JSON.stringify(person), (err) => {
                if (err) throw err
                else {
                    //lectura del fichero .json en caso de haberse grabado correctamente
                    console.log("Fichero grabado correctamente");
                    fs.readFile('reto2.json', (err, data) => {
                        if (err) throw err;
                        //mostrar datos del fichero por pantalla
                        console.log("Datos leidos del fichero JSON => " + data);
                        //dejar el fichero .json de nuevo vacio
                        fs.writeFile("reto2.json", "", (err) => { if (err) throw err });
                    });
                }
            });
        });
    });
});