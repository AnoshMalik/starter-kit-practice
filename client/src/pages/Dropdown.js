import React from "react";

function Dropdown() {
  return (
		<div>
			<div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
				<ul
					className="dropdown-menu position-static d-grid gap-1 p-2 rounded-3 mx-0 shadow w-220px"
					data-bs-theme="light"
				>
					<li>
						<a className="dropdown-item rounded-2 active" href="/">
							Action
						</a>
					</li>
					<li>
						<a className="dropdown-item rounded-2" href="/">
							Another action
						</a>
					</li>
					<li>
						<a className="dropdown-item rounded-2" href="/">
							Something else here
						</a>
					</li>
					<li>
						<hr className="dropdown-divider"></hr>
					</li>
					<li>
						<a className="dropdown-item rounded-2" href="/">
							Separated link
						</a>
					</li>
				</ul>
				<ul
					className="dropdown-menu position-static d-grid gap-1 p-2 rounded-3 mx-0 border-0 shadow w-220px"
					data-bs-theme="dark"
				>
					<li>
						<a className="dropdown-item rounded-2 active" href="/">
							Action
						</a>
					</li>
					<li>
						<a className="dropdown-item rounded-2" href="/">
							Another action
						</a>
					</li>
					<li>
						<a className="dropdown-item rounded-2" href="/">
							Something else here
						</a>
					</li>
					<li>
						<hr className="dropdown-divider"></hr>
					</li>
					<li>
						<a className="dropdown-item rounded-2" href="/">
							Separated link
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Dropdown;