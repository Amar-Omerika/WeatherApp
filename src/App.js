import React, { useState } from "react";
import { fweather } from "./api/weather";

const App = () => {
	const [query, setQuery] = useState("");
	const [sweather, setWeather] = useState("");

	const search = async (ev) => {
		if (ev.key == "Enter") {
			const data = await weather(query);
			setWeather(data);
			setQuery("");
		}
	};

	return (
		<div className="main-container">
			<input
				type="text"
				className="search"
				placeholder="Search.."
				value={query}
				onChange={(ev) => setQuery(ev.target.value)}
				onKeyPress={search}
			/>
			{weather.main && (
				<div className="city">
					<h2 className="city-name">
						<span>{weather.name}</span>
						<sup>{weather.sys.country}</sup>
					</h2>
				</div>
			)}
		</div>
	);
};

export default App;
