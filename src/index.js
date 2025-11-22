function searchCity(city) {
  let apiKey = "o06bft5bbca8788fdf0e3eba4053ea5c";
  let apiUrl =
    'https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric"';
  console.log(apiUrl);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
