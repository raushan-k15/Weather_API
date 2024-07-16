document.getElementById('get-weather-btn').addEventListener('click', function() {
    const apiKey = '59a8329e5f2bbf6b115845b57c17fba6';
    const location = document.getElementById('location-input').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city-name').textContent = `🔖City: ${data.name}`;
                document.getElementById('temperature').textContent = `⛅️Temperature: ${data.main.temp} °C`;
                document.getElementById('weather-condition').textContent = `☁️Condition: ${data.weather[0].description}`;
                document.getElementById('humidity').textContent = `🌤️Humidity: ${data.main.humidity} %`;
                document.getElementById('wind-speed').textContent = `💨Wind Speed: ${data.wind.speed} m/s`;
            } else {
                alert('Location not found. Please enter a valid location.');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred while fetching weather data.');
        });
});
