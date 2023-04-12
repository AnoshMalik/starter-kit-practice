import React from "react";
import { Link } from "react-router-dom";


function PhoneNumber() {
    return (
			<div>
				<div
					className="progress"
					role="progressbar"
					aria-label="Animated striped example"
					aria-valuenow="75"
					aria-valuemin="0"
					aria-valuemax="100"
				>
					<div
						className="progress-bar progress-bar-striped progress-bar-animated"
						style="width: 75%"
					></div>
				</div>
				<Link
					to={
						"https://www.youtube.com/watch?v=ostTvrCgIRA&ab_channel=INXS-Topic"
					}
				>
					Youtube Link
				</Link>
			</div>
		);
}

export default PhoneNumber;