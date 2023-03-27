import React from "react";
import { useSelector } from "react-redux/es/exports";
import { Byline } from "./Byline/Byline";
import { MetaData } from "./MetaData";
import generateRandomString from "../../../utils/generateRandomKey";
import "./newsitem.css";

export function NewsItems() {
	const news = useSelector((state) => state.news);

	const renderNews = (arr) => {
		const items = arr.map((item) => {
			return (
				<li className="news-item" key={generateRandomString()}>
					<div className="news-item-block">
						<Byline data={item} />
						<MetaData data={item} />
					</div>
				</li>
			);
		});

		return <ul>{items}</ul>;
	};

	const viewNews = renderNews(news);

	return <div className="news-wrapper">{viewNews}</div>;
}
