const fs = require ('fs/promises');
const readline = require ('readline/promises');

const rlp = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
  });

let person = {
    name: "",
    surname: "",
    age: ""
}

let path = 'promesas.json'

//reto3 con then/catch
// rlp.question("Introduzca el nombre: ")
//     .then((name)=>{ person.name = name
//                     return rlp.question("Introduzca el apellido: ");
//                   })
//     .then((surname)=>{ person.surname = surname;
//                        return rlp.question("Introduzca la edad: ")
//                      })
    // .then((age)=>{ person.age = age
    //                //escritura en el fichero JSON
    //                rlp.close();
    //                fs.writeFile(path,JSON.stringify(person));
    //              })
    // .then(()=>{ return fs.readFile(path, 'utf8')})
    // .then((data)=> {console.log(data);})
    // //volver a dejar el fichero en blanco
    // .then (()=>{fs.writeFile(path,'')})
    // .catch (fail=>{console.log(fail);})

//reto3 con async/await
async function writeReadFile(){
    try{
        person.name = await rlp.question("Introduzca el nombre: ");
        person.surname = await rlp.question("Introduzca el apellido: ");
        person.age = await rlp.question("Introduzca la edad: ");
        await rlp.close();
        await fs.writeFile(path, JSON.stringify(person));
        console.log(await fs.readFile(path, 'utf8'));
        //dejar el fichero en blanco de nuevo
        await fs.writeFile(path,'');
    }
    catch (fail){
        throw fail;
    }
}

writeReadFile();