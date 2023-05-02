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
		window.open("/api/auth/github");
	};


// const loginWithGithubBack = async (content) => {
// 	console.log(content);
// 	try {
// 		const response = await fetch("/api/auth/github", {
// 			method: "GET",
// 			headers: {
// 				"Content-Type": "application/json",
// 				"Access-Control-Allow-Origin": "*",
// 			},
// 			// body: JSON.stringify({
// 			// 	content,
// 			// 	//your expected POST request payload goes here

// 			// 	//body: content,
// 			// }),
// 		});
// 		const data = await response.json();
// 		// const result = data;
// 		//enter you logic when the fetch is successful
// 		// setResponse(result);
// 		console.log(data);
// 	} catch (error) {
// 		//enter your logic for when there is an error (ex. error toast)

// 		console.log(error);
// 	}
// };

	return (
		<div>
			<button onClick={loginWithGithubFront}>
				Sign in with Github (FRONT)
			</button>
			<button onClick={loginWithGithubBack}>Sign in with Github (BACK)</button>
			<p>{}</p>
		</div>
	);
}
export default Login;
