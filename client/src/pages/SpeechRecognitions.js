import React from "react";
import SpeechlyApp from "./SpeechlyApp";
import {
	PushToTalkButton,
	BigTranscript,
	IntroPopup,
} from "@speechly/react-ui";


function SpeechRecognitions() {
	return (
		<div>
			<p>Speech Recognition</p>
			<BigTranscript placement="top" />
			<PushToTalkButton placement="bottom" captureKey=" " />
			<IntroPopup />
			<SpeechlyApp />
		</div>
	);
}

export default SpeechRecognitions;