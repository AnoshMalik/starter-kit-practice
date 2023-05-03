import React, { useEffect } from "react";

function Login() {
	// const [data, setData] = useState("");
	const clientID = "868e844044fa721e33c4";

	useEffect(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const codeParam = urlParams.get("code");
		console.log(codeParam);
	}, []);

	function loginWithGithubFront() {
		window.location.assign(
			"https://github.com/login/oauth/authorize?client_id=" + clientID
		);
	}

	const loginWithGithubBack = async () => {
		// await fetch("/api/auth/github")
		// 	.then((response) => response.json())
		// 	.then((data) => setData(data))
		// 	.catch((error) => console.log(error));
		window.location.href = "/api/auth/github";
	};

	const loginWithGoogleBack = async () => {
		// await fetch("/api/auth/github")
		// 	.then((response) => response.json())
		// 	.then((data) => setData(data))
		// 	.catch((error) => console.log(error));
		window.location.href = "/api/auth/google";
	};

	return (
		<div>
			<button onClick={loginWithGithubFront}>
				Sign in with Github (FRONT)
			</button>
			<button onClick={loginWithGithubBack}>Sign in with Github (BACK)</button>
			<button onClick={loginWithGoogleBack}>Sign in with Google (BACK)</button>

			<p>{}</p>
		</div>
	);
}
export default Login;
