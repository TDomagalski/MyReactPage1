import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar/index";
import { InfoBar } from "../components/InfoBar/index";
import { Home } from "./routes/home/home";
import { Footer } from "../components/Footer";

export const App = () => {
	return (
		<div className="App">
			<InfoBar phoneNumber={664939711} email={"tomekwebdev@gmail.com"} />
			<Navbar />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
			<Footer />
		</div>
	);
};
