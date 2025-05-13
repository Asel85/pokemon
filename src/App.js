import "./styles/main.scss";
import Header from "./components/Header"
import SearchPokemon from "./components/SearchPokemon";
import { useState } from "react";
import PokemonList from "./components/PokemonList";
import TypeFilter from "./TypeFilter";

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  return (
    <div className="container">
    <Header />
    <SearchPokemon  searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    <TypeFilter selectedType={selectedType} setSelectedType={setSelectedType}/>
    <PokemonList searchTerm={searchTerm} selectedType={selectedType} />
    </div>
  );
}

export default App;
