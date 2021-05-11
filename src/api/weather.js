import axios from "axios";

const URL = "https://openweathermap.org/data/2.5/weather";
const API_Key = "848db343e4019df22bfc3b1ef8d33439";
const fweather = async (query) => {
	const { data } = await axios.get(URL, {
		parameters: {
			q: query,
			units: "metric",
			APPID: API_Key,
		},
	});
	return data;
};
export default fweather;
