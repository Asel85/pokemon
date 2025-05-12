import "./styles/main.scss";
import Header from "./components/Header"
import SearchPokemon from "./components/SearchPokemon";
import { useState } from "react";
import PokemonList from "./components/PokemonList";

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="container">
    <Header />
    <SearchPokemon  searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    <PokemonList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
