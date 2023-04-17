import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { SpeechProvider } from "@speechly/react-client";

import App from "./App";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<SpeechProvider appId="44f59e67-e98b-4eac-9d60-a5d18ad36afd">
			<App />
		</SpeechProvider>
	</BrowserRouter>
);
