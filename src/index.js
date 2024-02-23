import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WeatherApp from "./WeatherApp";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <h1>Weather App</h1> */}
		<WeatherApp />
		<footer>
			Coded by{" "}
			<a href="https://github.com/judyl2" target="blank">
				Judy
			</a>{" "}
			code hosted on{" "}
			<a href="https://github.com/judyl2?tab=repositories" target="blank">
				Github
			</a>{" "}
			website hosted on{" "}
			<a href="https://capable-maamoul-566235.netlify.app/" target="blank">
				Netlify
			</a>
		</footer>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
