const fetchWeatherFromAPI1 = () =>
    fetch('https://weather-api1.com/data').then(response => response.json());
  
  const fetchWeatherFromAPI2 = () =>
    fetch('https://weather-api2.com/data').then(response => response.json());
  
  const fetchWeatherFromAPI3 = () =>
    fetch('https://weather-api3.com/data').then(response => response.json());
  
  Promise.race([fetchWeatherFromAPI1(), fetchWeatherFromAPI2(), fetchWeatherFromAPI3()])
    .then((weatherData) => {
      console.log(weatherData);
    })
    .catch((error) => {
      console.error('Failed to fetch data:', error);
    });
  