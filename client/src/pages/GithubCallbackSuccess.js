import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function GithubCallack() {
	const navigate = useNavigate();
	const [imageSource, SetImageSource] = useState("");
	const [userName, SetUserName] = useState("");
	const [email, SetEmail] = useState("");
	const [displayName, SetDisplayName] = useState("");

	useEffect(() => {
		fetch("/api/success")
			.then((response) => response.json())
			.then((data) => {
				SetImageSource(data.profile);
				SetUserName(data.username);
                SetEmail(data.email);
                SetDisplayName(data.displayName);
				console.log(data.profile);
			})
			.catch((e) => console.log(e));
	}, []);

	// FETCH API
	//     const SignOut = async ()  => {
	//         try {
	//             const response = await fetch("/api/logout");
	//             const data = await response.json();
	//             console.log(data);
	//     } catch (error) {
	//         console.error("Error:", error);
	// }
	//     };

	// AXIOS
	const SignOut = async () => {
		try {
			await axios.get("/api/logout");
			// ({})
			// 	method: "GET",
			// 	url: "http://localhost:3000/api/logout",
			// 	withCredentials: true,
			// });
			// console.log(response);
			navigate("/login");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<p> Successfully Logged in!</p>
			<img
				src={imageSource}
				style={{ width: "100px", height: "100px" }}
				alt="my profile"
			></img>
			<p>{userName}</p>
			<p>{email}</p>
			<p>{displayName}</p>

			<button onClick={SignOut}> Sign Out</button>
		</div>
	);
}

export default GithubCallack;
