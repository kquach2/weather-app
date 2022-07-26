async function getCurrentWeather(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=74fa06d766c655ef3b930a00ace643d9&units=imperial`
  );
  const weatherData = await response.json();
  return weatherData;
}

async function processJSON(json) {
  const description = json.weather[0].description
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
  const city = json.name;
  let temp;
  let feelsLike;
  const { humidity } = json.main;
  const windSpeed = json.wind.speed;
  temp = json.main.temp;
  feelsLike = json.main.feels_like;

  return { description, city, temp, feelsLike, humidity, windSpeed };
}

export { getCurrentWeather, processJSON };
