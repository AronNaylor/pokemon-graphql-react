import { gql } from "apollo-boost";

export const GET_POKEMONS = gql`
  {
    pokemons(first: 6) {
      id
      name
      image
      maxCP
      maxHP
      attacks {
        fast {
          name
        }
        special {
          name
        }
      }
    }
  }
`;
