import React from 'react'
import styles from "./SearchPokemon.module.scss";

const SearchPokemon = ({searchTerm, setSearchTerm}) => {
  return (
    <div className={styles.searchBar}>
    <div className={styles.searchBlock}>
    <input onChange={(e)=>{setSearchTerm(e.target.value)}} value={searchTerm} className={styles.searchInput} type='text' placeholder='Search Pokemon'/> 
    <p className={styles.searchText}>Use this input to search for any pokemon.In an instant.</p>
    </div>
    </div>
  )
}

export default SearchPokemon
