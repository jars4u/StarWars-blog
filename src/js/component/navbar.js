import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light m-3">
			<Link to="/">
				<img
					src="https://www.nicelembrancinhas.com.br/image/cache/catalog/STAR%20WARS/LOGO%20STAR%20WARS%205CM-650x650.png"
					className="logo" alt="logo-img" />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
