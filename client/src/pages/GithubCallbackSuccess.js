import React, { useEffect, useState } from "react";

function GithubCallack() {
    const [imageSource, SetImageSource] = useState("");
    const [userName, SetUserName] = useState("");
    const [email, SetEmail] = useState("");

    useEffect (() => {


        fetch("/api/success")
            .then((response) => response.json())
            .then((data) => {
                SetImageSource(data.profile);
                SetUserName(data.username);
                SetEmail(data.email);
                console.log(data.profile);
            }).catch((e) =>console.log(e));
    }) ;


    return (
			<div>
				Successfully Logged in!
            <img src={imageSource} style={{ width: "100px", height: "100px" }} alt="my profile"></img>
				<p>{userName}</p>
            <p>{email}</p>
            <button >Go get</button>
			</div>
		);
}

export default GithubCallack;