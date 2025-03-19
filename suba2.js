const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

// Function to fetch weather data
async function getWeather() {
  const city = document.getElementById('city').value;
  if (!city) {
    alert("Please enter a city name.");
    return;
  }
  
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Check if the city is found
    if (data.cod !== 200) {
      alert(data.message);
      return;
    }

    // Extract and display data
    document.getElementById('city-name').innerText = data.name;
    document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;

  } catch (error) {
    alert("Error fetching weather data.");
    console.error(error);
  }
}
