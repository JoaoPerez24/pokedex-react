import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState<any[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [seleccionado, setSeleccionado] = useState<string | null>(null);
  const [detalle, setDetalle] = useState<any>(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        console.log(datos.results);
        setPokemon(datos.results);
      })
  }, []);

  useEffect(() => {
    if(seleccionado === null) return;
    fetch(`https://pokeapi.co/api/v2/pokemon/${seleccionado}`)
    .then((respuesta) => respuesta.json())
    .then((datos) => setDetalle(datos));
  }, [seleccionado]);

  const filtrados = pokemon.filter((p) =>
    p.name.includes(busqueda.toLowerCase())
  )

  if(seleccionado !== null){
    return (
      <div className="app">
        <button onClick={() => setSeleccionado(null)}>Volver</button>

        {detalle === null ? (
          <p>Cargando</p>
        ) : (
          <div className="detalle">
            <h1>{detalle.name.toUpperCase()}</h1>
            <img src={detalle.sprites.other["official-artwork"].front_default} alt={detalle.name} />

            <p>Altura: {detalle.height / 10} metros</p>
            <p>Peso: {detalle.weight / 10} kilos</p>
            <p>Tipos: {detalle.types.map((t: any) => t.type.name).join(", ")}</p>
          </div>
        )}
      </div>
    );
  }

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
              <div className="card" key={p.name} onClick={() => {setSeleccionado(p.name); setDetalle(null);}}>
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