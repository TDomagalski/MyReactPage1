import React, { useState } from "react";
import Logo from "../../img/Logo.svg";

interface hamProps {
	hamburger?: boolean | null;
	setHamburger: void;
}

export const Navbar: React.FC<hamProps> = () => {
	const [hamburger, setHamburger] = useState(false);

	const handleHamburger = () => {
		console.log(hamburger);

		setHamburger(!hamburger);
	};

	return (
		<nav>
			<div className="navbar">
				<a href="#" className="logo">
					<img src={Logo} alt="Logo" />
				</a>
				<button onClick={handleHamburger} className="hamburger">
					Ham
				</button>
			</div>
			<ul className={hamburger}>
				<li>Home</li>
				<li>Info</li>
				<li>Gallery</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};
