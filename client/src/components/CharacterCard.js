import { useState } from "react"
import senku from "../images/1.jpeg";
import charactersData from "../data/characters.js";

function CharacterCard() {

  const [characters, setCharacters] = useState(charactersData);

  return(
    <>
      <div id="character-card">
        <img src={senku} />

        <div id="card-text">
          <h2>{characters[0].name}</h2>

          <h3>First Appearance:</h3>
          <p>{characters[0].firstAppearance}</p>

          <h3>Affiliation:</h3>
          <p>{characters[0].affiliation.current}</p>
        </div>
      </div>
    </>
  )
}

export default CharacterCard;