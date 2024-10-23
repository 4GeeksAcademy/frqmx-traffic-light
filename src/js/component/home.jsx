import React, { useState } from 'react';

//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState("red");

	const toggleColor = () => {
		if (color === "red") {
			setColor("green");
		} else if (color === "green") {
			setColor("yellow");
		} else {
			setColor("red");
		}
	};



	return (
		<div className="traffic-light-container">
			<div
				className={"light red" + (color === "red" ? " glow" : "")}
				onClick={() => setColor("red")}
			></div>
			<div
				className={"light yellow" + (color === "yellow" ? " glow" : "")}
				onClick={() => setColor("yellow")}
			></div>
			<div
				className={"light green" + (color === "green" ? " glow" : "")}
				onClick={() => setColor("green")}
			></div>
			<button onClick={toggleColor} style={{ padding: "10px 20px", marginTop: "10px" }}>Change Color</button>
		</div>
	);
};

export default TrafficLight;

