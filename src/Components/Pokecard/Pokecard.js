import styles from './Pokecard.module.css';

const Pokecard = props => {

  const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
  const idValidate = num => {
    return(String(num).padStart(3, '0'));
  }

  return ( 
  <div className={styles.Pokecard}>
    <h2 className={styles.PokecardnName}>{props.name}</h2>
    <img className={styles.PokecardImage} src={`${POKE_API}${idValidate(props.id)}.png`} alt={props.name}/>
    <p className={styles.PokecardStats}>Type: {props.type}</p>
    <p className={styles.PokecardStats}>Exp: {props.exp}</p>
  </div>
  )
}

export default Pokecard;