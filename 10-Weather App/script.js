const input = document.querySelector('input')
const button = document.querySelector('button')
const form = document.querySelector('form')
const imageIcon = document.querySelector(".imageicon")
const temp = document.querySelector(".temp")
const weatherData = document.querySelector(".weather_data")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const cityName = input.value;
    const api = `https://api.weatherapi.com/v1/current.json?key=ededa1d6d2cb4d1f86b151320242512&q=${cityName}&aqi=yes`;
    try {
        fetch(api).then((response) => response.json())
            .then((data) => {
                const datas = data
                console.log(datas);
                const temp = datas.current.temp_c;
                const icon = datas.current.condition.icon
                const city = datas.location.name
                let result = ""
                result += `
                <div class="cardContainer mt-5">
                    <div class="card">
                       <p class="temp">${temp}</p>
                       <img src="${icon}" alt="weather-icon" class="imageicon">
                       <p class="city">${city}</p>
                    </div>
                </div>
                `;
                weatherData.innerHTML = result;
            });

    } catch (error) {
        console.log(error);
    }
});