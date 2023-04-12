import React from "react";
import { useState } from "react";

function Helloo() {
	// const newLocal = 4;
	// const a = 3 + newLocal;
	const [greeting, setGreeting] = useState("");


	function handleSubmit() {
		// fetch(""){
			setGreeting("hello world");
		// }
	}

	return (
		<div>
			<div>Hello </div>
			<input type="email"></input>
			<button type="submit" onClick={handleSubmit}>Submit</button>
			<p>{greeting}</p>
		</div>
	);
}

export default Helloo;
