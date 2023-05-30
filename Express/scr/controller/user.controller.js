const getStart = (req, res) =>{
    //mostrar por consola un mensaje cada vez que reciba una peticion del cliente
    console.log("Petición recibida del cliente");

    //mostrar por consola url, método y el user-agent por el que se está haciendo la petición
    console.log("URL: " + req.url);
    console.log("Método: " + req.method);
    console.log("user-agent: " + req.headers["user-agent"]);

    let respuesta = { ok: true, message: "Recibido!" };
    //configuracion del mensaje de respuesta
    res.set("content-type", "application/json");
    res.status(200).send(respuesta);
}

function getBye (req, res){
    let respuesta = { ok: true, message: "Googbye!" };
    //configuracion del mensaje de respuesta
    res.set("content-type", "application/json");
    res.status(200).send(respuesta);
}

module.exports = {getStart, getBye};