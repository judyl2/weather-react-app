import React, { useState } from "react";
import "./WeatherApp.css";
import axios from "axios";

export default function WeatherApp() {
	const [city, setCity] = useState("");
	const [result, setResult] = useState(false);
	const [temperature, setTemperature] = useState(null);
	const [description, setDescription] = useState(null);
	const [humidity, setHumidity] = useState(null);
	const [wind, setWind] = useState(null);
	const [icon, setIcon] = useState();

	function showWeather(response) {
		// console.log(apiUrl);
		setResult(true);
		setTemperature(Math.round(response.data.main.temp));
		setDescription(response.data.weather[0].description);
		setHumidity(response.data.main.humidity);
		setWind(response.data.wind.speed);
		setIcon(
			`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
		);
	}

	function handleSubmit(event) {
		event.preventDefault();
		let apiKey = "ab8e7ef210556986d1c9a75d6007b825";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(showWeather);
	}

	function updateCity(event) {
		event.preventDefault();
		setCity(event.target.value);
	}
	let form = (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="search"
					placeholder="Enter city"
					onChange={updateCity}
					className="search-input"
				/>
				<input type="submit" value="Search" className="search-button" />
			</form>
		</div>
	);

	if (result === true) {
		return (
			<div className="App">
				{form}
				<ul>
					<li>Temperture: {temperature}°C</li>
					<li>Description: {description}</li>
					<li>Humidity: {humidity}%</li>
					<li>Wind: {wind} km/h</li>
					<li>
						<img src={icon} alt={description} />
					</li>
				</ul>
			</div>
		);
	} else {
		return <div className="App"> {form}</div>;
	}
}
