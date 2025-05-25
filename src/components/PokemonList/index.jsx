import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from "./PokemonList.module.scss";
import PokemonCard from '../PokemonCard';

const PokemonList = ({searchTerm, selectedType}) => {
 const [pokemonData, setPokemonData] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(()=>{

    const getPokemon = async () =>{
      try{

        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        const results = res.data.results;
        const detailedData = await Promise.all(
            results.map(async(pokemon)=>{
             const pokeDetails = await axios.get(pokemon.url);
             console.log(pokeDetails.data)
             return pokeDetails.data;
            })
        )
        //console.log(detailedData);
        setPokemonData(detailedData);
        setLoading(false);
      }
      catch(err){
        setError("Errore nell caricamento dei Pokemon");
        setLoading(false);
      }
    }
    getPokemon();

 },[])

 const filteredData = pokemonData
 .filter((p)=>{
  return  p.name.toLowerCase().includes(searchTerm.toLowerCase());
 })
 .filter((p) =>
    selectedType
      ? p.types.some((t) => t.type.name === selectedType)
      : true
  );

  return (
    <>
    {loading && <h3>Loading...</h3>}
    {error && <p>{error}</p>}
    <div className={styles.pokemonList_block}>
    {
    filteredData.map((pokemon)=>
     (<PokemonCard pokemon={pokemon} key={pokemon.id} />)
    )}
    </div>
    </>
  )
}

export default PokemonList
