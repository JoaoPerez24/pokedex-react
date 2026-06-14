import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState<any[]>([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        console.log(datos.results);
        setPokemon(datos.results);
      })
  }, []);

  const filtrados = pokemon.filter((p) =>
    p.name.includes(busqueda.toLowerCase())
  )

  return (
    <div className="app">
      <h1>Pokedex</h1>

      <input type="text" placeholder="Buscar Pokemon" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />

      {filtrados.length === 0 ? (
        <p>No se encontro ningun Pokemon</p>
      ) : (
        <div className="grid">
          {filtrados.map((p) => {
            const id = pokemon.indexOf(p) + 1;
            const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
            return (
              <div className="card" key={p.name}>
                <img src={imagen} alt={p.name} />
                <p>{p.name}</p>
              </div>
            )
          })}
        </div>
      )

      }


    </div>
  );
}

export default App;