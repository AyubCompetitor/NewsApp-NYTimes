import React from "react";
import { NewsItem } from "./NewsItem";
import "./newswrapper.css";

export function NewsWrapper() {
	return (
		<div className="news-wrapper">
			<ul className="news-list">
				<NewsItem />
			</ul>
		</div>
	);
}
