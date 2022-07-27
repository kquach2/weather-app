import { getCurrentWeather, processJSON } from "./app-logic";
import displayInfo from "./dom-stuff";
import { initialLoad } from "./initial-load";
import "./styles.css";

let current;
(async () => {
  current = await initialLoad();
})();

const toggle = document.querySelector("#unit-toggle");
toggle.addEventListener("click", () => {
  if (toggle.textContent === "Display °F") toggle.textContent = "Display °C";
  else toggle.textContent = "Display °F";
  displayInfo(current);
});

const search = document.querySelector("#search-icon");
const searchBox = document.querySelector("#search");

search.addEventListener("click", async () => {
  try {
    document.querySelector("#error").style.visibility = "hidden";
    const json = await getCurrentWeather(searchBox.value);
    const object = await processJSON(json);
    current = object;
    displayInfo(current);
    searchBox.value = "";
  } catch (error) {
    document.querySelector("#error").style.visibility = "visible";
    searchBox.value = "";
  }
});
