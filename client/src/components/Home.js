import React from "react";
import CharacterCard from "./CharacterCard.js";

function Home() {
  return(
  <div id="home">
    <header>
      <h1>The Dr. Stone API</h1>
    </header>

    <CharacterCard />
  </div>
  );
}

export default Home;