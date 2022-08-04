import React, { useState } from "react";
import Logo from "../../img/Logo.svg";
import MenuIcon from "@mui/icons-material/Menu";

interface hamProps {
	hamburger: boolean | null;
	setHamburger: void;
}

export const Navbar: React.FC<hamProps> = () => {
	const [hamburger, setHamburger] = useState(false);

	const handleHamburger = () => {
		setHamburger(!hamburger);
	};

	return (
		<nav>
			<div className="navbar">
				<a href="#" className="logo">
					<img src={Logo} alt="Logo" />
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
