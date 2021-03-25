let xhrWeather = new XMLHttpRequest();

	xhrWeather.onreadystatechange = function(){
		if (xhrWeather.readyState === 4){
			if(xhrWeather.status === 200){
				let data = JSON.parse(xhrWeather.responseText);
				// console.log(data);

				let cityName = document.querySelector(".nameCity");
				cityName.textContent = nameCity;

				let tempDisplay = document.querySelector(".temperatureDisplay");
				let temp = Math.round(data.main.temp);
				tempDisplay.textContent = temp + "°C";

				let humidDisplay = document.querySelector(".humidityDisplay");
				let humid = data.main.humidity;
				humidDisplay.textContent = humid + "%";

				let windDisplay = document.querySelector(".windDisplay");
				let wind = data.wind.speed;
				windDisplay.textContent = wind + " m/s";

				let pressDisplay = document.querySelector(".pressureDisplay");
				let press = data.main.pressure;
				pressDisplay.textContent = press + " gPa";

				let cloudsDisplay = document.querySelector(".cloudsInfo");
				let clouds = data.clouds.all;
				cloudsDisplay.textContent = clouds + "%";

				let skyDisplay = document.querySelector(".skyInfo");
				let sky = data.weather[0].main;
				skyDisplay.textContent = sky;

				let iconDisplay = document.querySelector(".iconWeather");
				let iconPATH= data.weather[0].icon;
				iconDisplay.setAttribute("src", "http://openweathermap.org/img/wn/" + iconPATH + ".png");
				
				let getMain = document.querySelector("#container-get-properties-weather");
				if(sky == "Clouds" || sky == "Few clouds" || sky == "Broken clouds"){
					getMain.style.background = "url('img/clouds-bg.jpg')";
				}
				else if(sky == "Fog" || sky == "Mist"){
					getMain.style.background = "url('img/fog-bg.jpg')";
				}
				else if(sky == "Clear"){
					getMain.style.background = "url('img/clear-bg.jpg')";
				}
				else if(sky == "Rain" || sky == "Shower rain"){
					getMain.style.background = "url('img/rain-bg.png')";
				}
				else if(sky == "Thunderstorm"){
					getMain.style.background = "url('img/thunder-bg.jpg')";
				}
				else if(sky == "Snow"){
					getMain.style.background = "url('img/snow-bg.gif')";
				}

			}
		}
	}

	xhrWeather.open(
	"GET", 
	urlAddress + "?q=" + nameCity
	+ "&units=" + unitsTemp 
	+ "&APPID=" + appId 
	);

	xhrWeather.send();

	}
