const fs = require ('fs');

function writeAndRead(path, obj){
    fs.writeFile(path, JSON.stringify(obj), (err) => {
        if (err) throw err
        else {
            //lectura del fichero .json en caso de haberse grabado correctamente
            console.log("Fichero grabado correctamente");
            fs.readFile(path, (err, data) => {
                if (err) throw err;
                //mostrar datos del fichero por pantalla
                console.log("Datos leidos del fichero JSON => " + data);
                //dejar el fichero .json de nuevo vacio
                fs.writeFile(path, "", (err) => { if (err) throw err });
            });
        }
      });
}

// writeAndRead("fichero.json",{calle: "Teruel", numero: 8});

module.exports = {writeAndRead};


