import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "848db343e4019df22bfc3b1ef8d33439";

export const fetchWeather = async (query) => {
	const { data } = await axios.get(URL, {
		params: {
			q: query,
			units: "metric",
			APPID: API_KEY,
		},
	});

	return data;
};
