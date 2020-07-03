import { gql } from "apollo-boost";

export const GET_POKEMONS = gql`
  {
    pokemons(first: 2) {
      id
      name
      image
      maxCP
      maxHP
      attacks {
        fast {
          name
          damage
          type
        }
      }
    }
  }
`;
