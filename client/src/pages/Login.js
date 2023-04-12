import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Login= () => {
	// const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (event) => {
		event.preventDefault();
		try {
			// const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
			history.push("/");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<h1>Login Page</h1>
			<form onSubmit={handleLogin}>
				<label>
					Email:
					<input
						type="email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
				</label>
				<br />
				<label>
					Password:
					<input
						type="password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
				</label>
				<br />
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
