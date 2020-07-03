import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../GET_POKEMONS";
import Pokemon from "./Pokemon";

export default function PokemonContainer(props) {
  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading) return <p className="rotate">Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data.pokemons.map((pokemon) => (
        <div className="pokemonContainer">
          <Pokemon
            key={pokemon.id}
            maxCP={pokemon.maxCP}
            name={pokemon.name}
            maxHP={pokemon.maxHP}
            image={pokemon.image}
            attacksFast={[...pokemon.attacks.fast]}
            attacksSpecial={[...pokemon.attacks.special]}
          />
        </div>
      ))}
      <style jsx>
        {`
          .pokemonContainer {
            display: inline-flex;
            max-width: 500px;
            justify-content: space-evenly;
            margin: 10px 10px 10px 10px;
            border: 1px solid black;
            border-radius: 10%;
            box-shadow: 5px 5px 0px 0px;
            padding: 5px 5px 5px 5px;
          }

          }
        `}
      </style>
    </>
  );
}
