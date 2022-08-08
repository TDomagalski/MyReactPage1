import { Navbar } from "../components/Navbar/index";
import { InfoBar } from "../components/InfoBar/index";

export const App = () => {
	return (
		<div className="App">
			<InfoBar phoneNumber={664939711} email={"tomekwebdev@gmail.com"} />
			<Navbar />
			<h1>Page</h1>
		</div>
	);
};
