import { useGetPokemonByNameQuery } from "../../redux/apis/pokeApi";
import {
  FaWeightHanging,
  FaBookmark,
  FaHotjar,
  FaCloudsmith,
} from "react-icons/fa";
import { SiPokemon } from "react-icons/si";

export const PokemonsID = ({ name }) => {
  const { data, isLoading } = useGetPokemonByNameQuery(name);

  return (
    <div style={{ float: "left", textAlign: "center" }}>
      {isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className="Poke-select">
          <h1 style={{ margin: 2 }}>
            <SiPokemon color="green" fontSize="1.5em" />
          </h1>
          <h3>{data.species.name.toUpperCase()}</h3>
          <div>
            <FaBookmark color="green" /> <b>{data.id}</b>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
            <img src={data.sprites.back_shiny} alt={data.species.name} />
            <hr />
            <div className="characteres-poke">
              <ul>
                <span>
                  <FaCloudsmith /> {data.types[0].type.name}
                </span>
              </ul>
              <ul>
                <span>
                  <FaWeightHanging /> {data.weight}kg
                </span>
              </ul>
              <ul>
                <span>
                  <FaHotjar /> {data.abilities[0].ability.name} -{" "}
                  {data.abilities[1].ability.name}
                </span>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        "No Data"
      )}
    </div>
  );
};
