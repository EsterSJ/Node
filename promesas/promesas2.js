const fs = require ('fs/promises');

let person = {
    name: "María",
    surname: "López",
    age: 38
}

let path = 'promesas.json'


//reto con then/catch
// fs.writeFile(path,JSON.stringify(person))
//     .then (()=>{return fs.readFile(path,'utf8')})
//     .then ((data)=>{console.log(data);})
//     .then (()=>{fs.writeFile(path,'')})
//     .catch (fail=>{console.log(fail);})

//reto con asycn/await
async function writeReadFile(){
    try{
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