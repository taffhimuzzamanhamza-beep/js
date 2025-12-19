const apiKey = '4cdfb833764ad82bdb0788f771c390bb'; 
const btn = document.getElementById('getWeather');
const resultDiv = document.getElementById('weatherResult');

btn.addEventListener('click', async () => {
    const city = document.getElementById('cityInput').value;
    
    
    resultDiv.innerHTML = "Loading...";

    try {
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        
       
        if (!response.ok) {
            throw new Error("City not found. Please check the spelling....");
        }

        const data = await response.json();

        
        resultDiv.innerHTML = `
            <h3>Weather in ${data.name}</h3>
            <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Condition:</strong> ${data.weather[0].description}</p>
        `;

    } catch (error) {
        
        resultDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
});
