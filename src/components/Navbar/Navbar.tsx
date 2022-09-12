import React, { useState } from "react";
import Logo from "../../img/Logo.svg";
import MenuIcon from "@mui/icons-material/Menu";

type hamProps = {
	hamburger: boolean;
	setHamburger: void;
};

export const Navbar = () => {
	const [hamburger, setHamburger] = useState<hamProps | boolean>(false);

	const handleHamburger = () => {
		setHamburger(!hamburger);
	};

	return (
		<nav>
			<div className="navbar">
				<a href="#" className="logo">
					<img src={Logo} alt="Logo" />
					<span>TomiDom</span>
				</a>
				<button onClick={handleHamburger} className="hamburger">
					<MenuIcon />
				</button>
			</div>
			<ul className={hamburger ? "nav_menu open" : "nav_menu"}>
				<li>Home</li>
				<li>Info</li>
				<li>Gallery</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};
