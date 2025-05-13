import React from 'react'
import styles from "./PokemonCard.module.scss";

const typeColors = {
  grass: '#78C850',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  bug: '#A8B820',
  normal: '#A8A878',
  poison: '#A040A0',
  ground: '#E0C068',
  rock: '#B8A038',
  ghost: '#705898',
  fighting: '#C03028',
  psychic: '#F85888',
  dragon: '#7038F8'
};

const PokemonCard = ({pokemon}) => {
  return (
    <div className={styles.card}>
    <div className={styles.card_img}>
    <img className={styles.img} src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
     <div className={styles.card_id}>
      <p>ID : #{pokemon.id}</p>
      <p>EXP : {pokemon.base_experience}</p>
     </div>
     <div className={styles.pokemon_types}>
      <h3 className={styles.pokemonName}>{pokemon.name}</h3>
      <p>{pokemon.types.map((t) => (
    <span
      key={t.type.name}
      style={{
        backgroundColor: typeColors[t.type.name],
        color: "white",
        padding: "4px 8px",
        borderRadius: "12px",
        marginRight: "6px",
        display: "inline-block",
        fontSize: "12px",
        width:"50px"
      }}
    >
      {t.type.name}
    </span>
  ))}</p>
  </div>
    </div>
  )
}

export default PokemonCard
