import { useEffect, useState } from "react";

function App(){
  const [pokemon, setPokemon] = useState<any[]>([]); 

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      console.log(datos.results);
      setPokemon(datos.results);
    })
  }, []);

  return (
    <div>
      <h1>Pokedex</h1>
      <p>Pokemon cargados: {pokemon.length}</p>
    </div>
  );
}

export default App;