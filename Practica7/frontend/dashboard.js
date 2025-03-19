function fetchWeather() {
    const apiKey = "56130f588977416b7fcc84ef7e0b4b5c";
    const city = "Mexico City";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Response error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("weather").innerHTML = `<strong>🌡️ ${data.main.temp}°C</strong> - ${data.weather[0].description}`;
            document.getElementById("weather").classList.remove("loading");
        })
        .catch(error => {
            console.error("Error fetching weather:", error);
            document.getElementById("weather").innerText = "Unable to fetch weather data.";
        });
}

function fetchFinance() {
    const url = "https://rest.coinapi.io/v1/exchangerate/BTC/USD";

    fetch(url, {
        headers: {
            "X-CoinAPI-Key": "23f5454f-ec55-42eb-b767-7300268699d1"
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Response error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("finance").innerHTML = `<strong>💰 Bitcoin:</strong> ${data.rate} USD`;
            document.getElementById("finance").classList.remove("loading");
        })
        .catch(error => {
            console.error("Error fetching financial data:", error);
            document.getElementById("finance").innerText = "Unable to fetch financial data.";
        });
}

fetchWeather();
fetchFinance();
