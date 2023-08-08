import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mx-5">
			<Link to="/">
				<img
					src="https://www.nicelembrancinhas.com.br/image/cache/catalog/STAR%20WARS/LOGO%20STAR%20WARS%205CM-650x650.png"
					className="logo" alt="logo-img" />
			</Link>
			<div className="btn-group">
				<button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu">
					...
				</ul>
			</div>
		</nav>
	);
};
