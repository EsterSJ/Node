const fs = require ('fs');

let person = {
    name: "Ester",
    surname: "Sanchez",
    age: 38
}

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