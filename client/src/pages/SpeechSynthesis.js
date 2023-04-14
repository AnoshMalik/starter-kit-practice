import { useState } from "react";
const { SpeechSynthesisUtterance } = window.speechSynthesis;

function SpeechSynthesis() {
	// const [synth, setSynth] = useState(null);

	// useEffect(() => {
	// 	const synth = new SpeechSynthesisUtterance();
	// 	setSynth(synth);
	// }, []);

	// const handleSpeak = () => {
	// 	if (synth) {
	// 		synth.text = "Hello, world!";
	// 		window.speechSynthesis.speak(synth);
	// 	}
	// };

	// return (
	// 	<div>
	// 		<p>SpeechSynthesis</p>
	// 		<button onClick={handleSpeak}>Speak</button>
	// 	</div>
	// );

	const [ourText, setOurText] = useState("");
	const msg = new SpeechSynthesisUtterance();

	const speechHandler = (msg) => {
		msg.text = ourText;
		window.speechSynthesis.speak(msg);
	};

	return (
		<div className="App">
			<h1>React Text to Speech App</h1>
			<input
				type="text"
				value={ourText}
				placeholder="Enter Text"
				onChange={(e) => setOurText(e.target.value)}
			/>
			<button onClick={() => speechHandler(msg)}>SPEAK</button>
		</div>
	);
}

export default SpeechSynthesis;
