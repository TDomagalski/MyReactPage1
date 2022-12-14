import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App/App";
import { BrowserRouter as Router } from "react-router-dom";
import "./App/styles/css/App.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>
);
