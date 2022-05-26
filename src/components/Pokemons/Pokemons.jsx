import React, { useState } from "react";
import { useGetPokemonsQuery } from "../../redux/apis/pokeApi";
import { PokemonsID } from "./PokemonsID";

export default function Pokemons() {
  const [offset, setOffset] = useState(0);
  const [pokemon, setPokemon] = useState([]);

  const { data: pokemons = [], isLoading } = useGetPokemonsQuery(offset);
  const poke = pokemons.results;

  const next = () => {
    setOffset(offset + 10);
  };

  const previous = () => {
    offset === 0 ? null : setOffset(offset - 10);
  };
  return (
    <div>
      <h1>Pokemones</h1>

      {isLoading
        ? "Loading..."
        : poke.map((pokemon) => (
            <div key={pokemon.name}>
              <button
                onClick={() => setPokemon((prev) => [...prev, pokemon.name])}
              >
                {pokemon.name}
              </button>
            </div>
          ))}

      <button onClick={previous}>Atras</button>
      <button onClick={next}>Next</button>
      {/* <PokemonsID /> */}

      <div>Add pokemons</div>
      {pokemon.map((name, index) => (
        <PokemonsID key={index} name={name} />
      ))}
    </div>
  );
}
