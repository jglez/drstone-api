import APISnippet from "./APISnippet";
import baseUrl from "../utils/baseUrl.js";
import paths from "../utils/paths.js";

const apiResources = {
  characters: baseUrl + paths.characters,
  episodes: baseUrl+ paths.episodes
}

function Docs() {
  return(
    <div id="docs-page">
      <div id="docs-container">
        <h2>Resources</h2>
        <p>The Dr. Stone API has two resources: <a target="_blank" href="https://drstone-api.herokuapp.com/api/characters">characters</a> and <a target="_blank" href="https://drstone-api.herokuapp.com/api/episodes">episodes</a>. Of the two, characters is the more interesting one as it has a lot more data including an image for each character.</p>

        <h2>REST</h2>
        <p>Base URL: <a target="_blank" href="https://drstone-api.herokuapp.com/api">https://drstone-api.herokuapp.com/api</a></p>
        <p>The base URL contains information about the available resouces on the API. All requests are <span class="info">GET</span> requests, and all responses will return data in <span className="info">json</span>.</p>

        <APISnippet type="GET" path={baseUrl + "/api"} data={apiResources} />
      </div>
    </div>
  )
}

export default Docs;