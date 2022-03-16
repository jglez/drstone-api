function CharacterCard(props) {
  const { name, firstAppearance, affiliation } = props.characterObj;

  return(
    <>
      <div id="character-card">
        <img src={props.image} />

        <div id="card-text">
          <h2>{name}</h2>

          <h3>First Appearance:</h3>
          <p>{firstAppearance}</p>

          <h3>Affiliation:</h3>
          <p>{affiliation.current}</p>
        </div>
      </div>
    </>
  )
}

export default CharacterCard;