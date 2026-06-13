import { useEffect, useState } from "react";
import "./App.css";

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
      <div className="grid">
        {pokemon.map((p, index) => {
          const id = index + 1;
          const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
          return (
            <div className="card" key={p.name}>
              <img src={imagen} alt={p.name}/>
              <p>{p.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;