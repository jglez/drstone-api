import React from "react";
import CharacterCard from "./CharacterCard.jsx";
import charactersData from "../data/characters.js";

const characterImages = import.meta.glob("../images/*.jpeg", {
  eager: true,
  import: "default"
});

function Home() {
  return (
    <div id="home">
      <header>
        <h1>The Dr. Stone API</h1>
      </header>

      <div id="cards-container">
        {charactersData.map((character) => {
          const image = characterImages[`../images/${character.id}.jpeg`];

          return <CharacterCard key={character.id} characterObj={character} image={image} />;
        })}
      </div>
    </div>
  );
}

export default Home;
