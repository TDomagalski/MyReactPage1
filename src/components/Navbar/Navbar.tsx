import React from "react";
import Logo from "../../img/Logo.svg";

export const Navbar: React.FC = () => {
	return (
		<nav>
			<div className="navbar">
				<a href="#" className="logo">
					<img src={Logo} alt="Logo" />
				</a>
				<a href="#" className="hamburger">
					Ham
				</a>
			</div>
			<ul className="nav_menu">
				<li>Home</li>
				<li>Info</li>
				<li>Gallery</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};
