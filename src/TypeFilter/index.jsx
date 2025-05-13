import React from 'react'
import styles from "./TypeFilter.module.scss";

const TypeFilter = ({selectedType, setSelectedType}) => {
const types = [
  'grass', 'fire', 'water', 'electric', 'bug',
  'normal', 'poison', 'ground', 'rock', 'ghost',
  'fighting', 'psychic', 'dragon'
];

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

  return (
    <div className={styles.typeFilter}>
     <h2 className={styles.typeFilter_title}>Filter by type : </h2> 
     <div className={styles.type}>
     {types.map((type)=>(
        <button onClick={()=>{setSelectedType(type)}} key={type} className={selectedType === type ? styles.active : ""} style={
            {backgroundColor:typeColors[type],
             color:'white',
             paddingTop:6,
             paddingBottom:6,
             paddingRight:6,
             paddingLeft:6,
             borderRadius:10,
             fontSize:12,
             width:50,

            }
        }>{type}</button>
    ))}
        <button onClick={() => setSelectedType('')} className={styles.reset}>
        Reset
      </button>
     </div>
    </div>
  )
}

export default TypeFilter
