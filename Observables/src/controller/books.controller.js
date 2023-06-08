const Book = require ("../models/book");

let libro1 = new Book("El carnaval de los animales","Tapa dura","Katy Flint",24.95,"assets/img/carnaval_animales.jpg",547,0);
let libro2 = new Book("Las cuatro estaciones en un día","Tapa dura","Katie Cotton",24.95,"assets/img/cuatro_estaciones.jpg",896,0);
let libro3 = new Book("LA bella durmiente","Tapa dura","Katy Flint",24.95,"assets/img/bella_durmiente.jpg",486,0);
let libro4 = new Book("La flauta mágica","Tapa dura","Katy Flint",24.95,"assets/img/flauta_magica.jpg",205,0);
let libro5 = new Book("El lago de los cisnes","Tapa dura","Katie Cotton",24.95,"assets/img/lago_cisnes.jpg",673,0);

let books = [libro1, libro2, libro3, libro4, libro5];

const getBooks = (req, res) =>{
    let respuesta = [];
    if (req.query.id == undefined){
        respuesta = books;
    }
    else{
        let i = 0;
        while (i < books.length && (req.query.id != books[i].id_book)){
            i++;
        }
        if (i == books.length) { respuesta = "No se ha encontrado el libro buscado"}
        else { respuesta.push(books[i])}
    }
    res.send(respuesta);
}

const postBooks = (req, res) => {
    let newBook = new Book(req.body.title,req.body.type,req.body.author,req.body.price,req.body.photo,req.body.id_book,req.body.id_user);
    books.push(newBook);
    res.send(books);
}

const putBooks = (req, res ) => {
    let i = 0;
    let respuesta;
    while (i < books.length && (req.body.id_book != books[i].id_book)){
        i++;
    }
    if (req.body.id_book == books[i].id_book){
        if (req.body.title != '') { books[i].title = req.body.title}
        if (req.body.type != '') { books[i].type = req.body.type}
        if (req.body.author != '') { books[i].author = req.body.author}
        if (req.body.price != '') { books[i].price = req.body.price}
        if (req.body.photo != '') { books[i].photo = req.body.photo}
        if (req.body.id_book != '') { books[i].id_book = req.body.id_book}
        if (req.body.id_user != '') { books[i].id_user = req.body.id_user}
        respuesta = books;
    }
    else{
        respuesta = "Libro no encontrado"
    }
    res.send(respuesta);
}

const deleteBooks = (req, res) => {
    let i = 0;
    let respuesta;

    while (i < books.length && req.body.id_libro != books[i].id_book){
        i++;
    }

    if (req.body.id_libro == books[i].id_book){
        books.splice(i,1);
        respuesta = true;
    }
    else{
        respuesta = false;
    }
    res.send(respuesta);
}

module.exports = {getBooks, postBooks, putBooks, deleteBooks};