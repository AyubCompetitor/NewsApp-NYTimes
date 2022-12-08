import React from "react";
import { useEffect, useState } from "react";
import { useNewsRequest } from "../../../../service/NytService";
import "./newsitem.css";

export function NewsItem() {
	const { getNews } = useNewsRequest();

	const [news, setNews] = useState([]);

	useEffect(() => {
		onRequest();
	}, []);

	const onRequest = () => {
		getNews().then((res) => setNews(res));
	};

	// const newsLoaded = (newData) => {
	// 	setNews((news) => [...news, ...newData]);
	// };

	return (
		<>
			{news.map((item) => {
				return (
					<li className="news-item">
						<div className="news-item-block">
							<div className="dates-container">
								<span className="date">{item.date}</span>
							</div>
							<div className="meta">
								<a href="#" className="link">
									<div className="abstract">
										<h2 className="title">{item.title}</h2>
										<p className="description">
											{item.description}
										</p>
									</div>
									<img
										src={item.thumbnail}
										alt={item.title}
										className="thumbnail"
									/>
								</a>
							</div>
						</div>
					</li>
				);
			})}
		</>
	);
}
