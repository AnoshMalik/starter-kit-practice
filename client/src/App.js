import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Helloo from "./pages/Helloo";
import Login from "./pages/Login";
import PhoneNumber from "./pages/PhoneNumber";
import Sidebar from "./pages/Sidebar";
import Dropdown from "./pages/Dropdown";
import Dashboard from "./pages/Dashboard";
import SpeechSynthesis from "./pages/SpeechSynthesis";
import SpeechRecognitions from "./pages/SpeechRecognitions";

const App = () => (
	<div>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about/this/site" element={<About />} />
			<Route path="/hello" element={<Helloo />} />
			<Route path="/login" element={<Login />} />
			<Route path="/phonenumber" element={<PhoneNumber />} />
			<Route path="/sidebar" element={<Sidebar />} />
			<Route path="/dropdown" element={<Dropdown />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/speak" element={<SpeechSynthesis />} />
			<Route path="/say" element={<SpeechRecognitions />} />
		</Routes>
	</div>
);

export default App;
