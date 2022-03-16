import { useState, React } from "react";
import CharacterCard from "./CharacterCard.js";
import charactersData from "../data/characters.js";

function Home() {

  const [characters, setCharacters] = useState(charactersData);

  return(
  <div id="home">
    <header>
      <h1>The Dr. Stone API</h1>
    </header>

    <div id="cards-container">
      {characters.map(character => {
        const image = require(`../images/${character.id}.jpeg`);

        return<CharacterCard key={character.id} characterObj={character} image={image} />
      })}
    </div>
  </div>
  );
}

export default Home;