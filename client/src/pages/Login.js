import React, { useEffect } from "react";

function Login() {
	const clientID = "868e844044fa721e33c4";

	useEffect(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const codeParam = urlParams.get("code");
		console.log(codeParam);
	},[]);


	function loginWithGithubFront() {
		window.location.assign(
			"https://github.com/login/oauth/authorize?client_id=" + clientID
		);
	}

	function loginWithGithubBack() {
		fetch("api/auth/github");
	}

	return (
		<div>
			<button onClick={loginWithGithubFront}>
				Sign in with Github (FRONT)
			</button>
			<button onClick={loginWithGithubBack}>Sign in with Github (BACK)</button>
		</div>
	);
}
export default Login;
