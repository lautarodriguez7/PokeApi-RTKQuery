import React, { useState } from "react";
import { useGetPokemonsQuery } from "../../redux/apis/pokeApi";
import { PokemonsID } from "./PokemonsID";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { MdCatchingPokemon } from "react-icons/md";

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
      <h1>
        {" "}
        <MdCatchingPokemon color="red" fontSize="1.5em" />
        Pokedex
      </h1>
      {isLoading
        ? "Loading..."
        : poke.map((pokemon) => (
            <div style={{ margin: 1 }} key={pokemon.name}>
              <ul>
                <button
                  className="button-pokemon"
                  onClick={() => setPokemon((prev) => [...prev, pokemon.name])}
                >
                  {pokemon.name.toUpperCase()}
                </button>
              </ul>
            </div>
          ))}

      <button className="arrow" onClick={previous}>
        <FaArrowLeft />
      </button>
      <button className="arrow" onClick={next}>
        <FaArrowRight />
      </button>
      <hr />

      <h1>Pokemons Catched</h1>
      <div className="list-poke">
        {pokemon.map((name, index) => (
          <PokemonsID key={index} name={name} />
        ))}
      </div>
    </div>
  );
}
