function displayInfo(obj) {
  document.querySelector("#description").textContent = obj.description;
  document.querySelector("#city").textContent = obj.city;
  const toggle = document.querySelector("#unit-toggle");
  document.querySelector("#humidity").textContent = `${obj.humidity}%`;
  document.querySelector("#wind-speed").textContent = `${Math.round(
    obj.windSpeed
  )} mph`;

  if (toggle.textContent === "Display °C") {
    document.querySelector("#temp").textContent = `${Math.round(obj.temp)} °F`;
    document.querySelector("#feels-like").textContent = `${Math.round(
      obj.feelsLike
    )} °F`;
  } else {
    document.querySelector("#temp").textContent = `${Math.round(
      (obj.temp - 32) * (5 / 9)
    )} °C`;
    document.querySelector("#feels-like").textContent = `${Math.round(
      (obj.feelsLike - 32) * (5 / 9)
    )} °C`;
  }
}

export default displayInfo;
