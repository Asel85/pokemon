import React from 'react'
import styles from "./PokemonCard.module.scss";

const PokemonCard = ({pokemon}) => {
  return (
    <div className={styles.card}>
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>EXP: {pokemon.base_experience}</p>
      <p>ID: #{pokemon.id}</p>
      <p>Type: {pokemon.types.map(t => t.type.name).join(', ')}</p>
    </div>
  )
}

export default PokemonCard
