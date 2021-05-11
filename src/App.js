import React, { useState } from "react";
import { weather } from "./api/weather";

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
		<div>
			<input
				type="text"
				className="search"
				placeholder="Search.."
				value={query}
				onChange={(ev) => setQuery(event.target.value)}
				onKeyPress={search}
			/>
		</div>
	);
};

export default App;
