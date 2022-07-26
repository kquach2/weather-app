import { getCurrentWeather, processJSON } from "./app-logic";
import displayInfo from "./dom-stuff";
import Search from "./search.png";

async function initialLoad() {
  const searchBox = document.querySelector("#search-box");

  const search = new Image();
  search.src = Search;
  search.id = "search-icon";
  searchBox.appendChild(search);

  const json = await getCurrentWeather("Chicago");
  const object = await processJSON(json);
  displayInfo(object);
  return object;
}

// eslint-disable-next-line import/prefer-default-export
export { initialLoad };
