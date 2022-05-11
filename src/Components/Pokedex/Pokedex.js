import initialState from "../../initialState";
import Pokecard from "../Pokecard/Pokecard";
import styles from "./Pokedex.module.css";

const Pokedex = () => {
  const pokemons = initialState;
  return (
    <ul className={styles.PokedexList}> 
      {pokemons.map(pokemon => 
      <Pokecard 
        key={pokemon.id} 
        id={pokemon.id}
        name={pokemon.name} 
        type={pokemon.type} 
        exp={pokemon.base_experience}/>)}
    </ul>
  )
}

export default Pokedex;