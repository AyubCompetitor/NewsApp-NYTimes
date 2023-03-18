import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavBar } from "../NavBar";
import { NewsStream } from "../NewsStream";
import { loadNews } from "../../store/news/newsAction";
import "./App.css";

function App() {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadNews());
	}, []);

	return (
		<div className="App">
			<NavBar />
			<NewsStream />
		</div>
	);
}

export default App;
