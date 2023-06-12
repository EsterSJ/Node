//Clase Pokemon
class Pokemon{

    constructor(name,photo,characteristics){
        this.name = name,
        this.photo = photo,
        this.characteristics = characteristics
    }
}

function buscaPokemon(){
    //recogemos el nombre del pokemon a buscar
    let pokemon = new Pokemon;
    let name = document.getElementById("name").value;

    //consultamos el pokemon a la PokeAPI
    //la peticion debe recibir el nombre en minusculas
    getPokemon(name.toLowerCase());

}

async function getPokemon(name){
    //url del endpoint a consultar
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    //construimos los parametros para hacer la peticion a la API
    const param = {
        headers:{ "Content-Type": "application/json; charset= UTF-8" },
        method: "GET"
    }

    try{
        let data = await fetch(url,param);
        let result = await data.json();
        
        //constrimos la variable de la clase pokemos para mostrar sus datos en formato tabla
        let photo = result.sprites.other.home.front_default;

        //construimos un array solo con los nombres de las habilidades
        let abilities = [];
        for(let i=0; i<result.abilities.length; i++){
            abilities.push(result.abilities[i].ability.name);
        }

        let pokemon = new Pokemon(name,photo,abilities);    

        //mostramos por pantalla las habilidades del pokemon
        let tabla = document.getElementById("tabla_habilidades");
        tabla.innerHTML = `<tr> 
                                <th>${pokemon.name.toUpperCase()}</th>
                            </tr>`;
        
        tabla.innerHTML += `<tr> 
                                <th><img src="${pokemon.photo}"></th>
                            </tr>`;

        for (let i=0; i<pokemon.characteristics.length; i++){
            tabla.innerHTML += `<th>${pokemon.characteristics[i]}</th>`
        }
    }
    catch(error){
        console.log("Pockemon no encontrado");
    }

}
