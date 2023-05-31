const Book = require("../models/book");

let libro = new Book("Los pilares de la tierra","pasta dura", "Ken Follett", 25, "https://m.media-amazon.com/images/I/51xQe5R3ueL.jpg");

const getBook = (req, res) =>{
    //obtiene un libro
    let respuesta = libro;
    res.send(respuesta);
}

const postBook = (req, res) => {
    let newBook = new Book(req.body.title,req.body.type,req.body.author,req.body.price,req.body.photo,req.body.id_book,req.body.id_user);
    res.send(newBook);
}

const putBook = (req, res ) => {
    if (req.body.id_book == libro.id_book){
        libro = req.body
    }
    res.send(libro);
}

const deleteBook = (req, res) => {
    if (req.body.id_book == libro.id_book){
        libro = null;
    }
    console.log("Libro eliminado correctamente");
    res.send(libro);
}

module.exports = {getBook, postBook, putBook, deleteBook};