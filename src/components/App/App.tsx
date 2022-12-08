import React from "react";
import { NavBar } from "../NavBar";
import { NewsStream } from "../NewsStream";
import "./App.css";

function App() {
	return (
		<div className="App">
			<NavBar />
			<NewsStream />
		</div>
	);
}

export default App;
