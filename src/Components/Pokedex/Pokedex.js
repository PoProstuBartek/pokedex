import Pokecard from "../Pokecard/Pokecard";
import styles from "./Pokedex.module.css";

const Pokedex = props => {
  const pokemons = props.pokemon;
  let title;
  if (props.isWinner) {
    title = <h1 className={styles.PokedexWinner}>Winning Hand!</h1>
  } else {
    title = <h1 className={styles.PokedexLoser}>Losing Hand!</h1>
  }
  return (
    <div>
      {title}
      <h4>Total Experience: {props.exp}</h4>
      <ul className={styles.PokedexList}> 
        {pokemons.map(pokemon => 
        <Pokecard 
          key={pokemon.id} 
          id={pokemon.id}
          name={pokemon.name} 
          type={pokemon.type} 
          exp={pokemon.base_experience}/>)}
      </ul>
    </div>
  )
}

export default Pokedex;