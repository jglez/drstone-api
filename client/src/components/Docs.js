function Docs() {
  return(
    <div id="docs-page">
      <div id="docs-container">
        <h2>Resources</h2>
        <p>The Dr. Stone API has two resources: <a target="_blank" href="https://drstone-api.herokuapp.com/api/characters">characters</a> and <a target="_blank" href="https://drstone-api.herokuapp.com/api/episodes">episodes</a>. Of the two, characters is the more interesting one as it has a lot more data including an image for each character.</p>

        <h2>REST</h2>
        <p>Base URL: <a target="_blank" href="https://drstone-api.herokuapp.com/api">https://drstone-api.herokuapp.com/api</a></p>
        <p>The base URL contains information about the available resouces on the API. All requests are <span class="info">GET</span> requests, and all responses will return data in <span className="info">json</span>.</p>

        <code>
          <div className="code-text"><span className="value">GET</span> <span className="grey">https://drstone-api.herokuapp.com/api</span></div>
        </code>

        {/* Need to fix this later, really ugly atm */}
        <code>
          <div className="code-text">
            <span className="grey">&#123;</span><br />
            <span className="key">&nbsp;&nbsp;"characters"</span>
            <span class="grey">&#58;</span>
            <span className="value"> "https://drstone-api.herokuapp.com/api/characters"</span>
            <span class="grey">,</span><br />

            <span className="key">&nbsp;&nbsp;"episodes"</span>
            <span class="grey">&#58;</span>
            <span className="value"> "https://drstone-api.herokuapp.com/api/episodes"</span>
            <br /><span className="grey">&#125;</span>
          </div>
        </code>
      </div>
    </div>
  )
}

export default Docs;