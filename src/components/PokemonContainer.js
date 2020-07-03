import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMONS } from "../GET_POKEMONS";
import Pokemon from "./Pokemon";

export default function PokemonContainer(props) {
  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    console.log(data.pokemons);

  return (
    <div className="pokemonContainer">
      {data.pokemons.map((pokemon) => (
        <Pokemon
          key={pokemon.id}
          maxCP={pokemon.maxCP}
          name={pokemon.name}
          maxHP={pokemon.maxHP}
          image={pokemon.image}
        />
      ))}
      <style jsx>
          {
              `
                .pokemonContainer {
                    display: inline-flex;
                    max-width: 800px;
                    justify-content: space-evenly;
                    margin: 10px 10px 10px 10px;
                }
              `
          }
      </style>
    </div>
  );
}
