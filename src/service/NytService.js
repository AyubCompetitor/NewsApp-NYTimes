import { useHttp } from "../hooks/http.hook";

const useNewsRequest = () => {
	const { error, request, clearError } = useHttp();

	const _apiBase =
		"https://api.nytimes.com/svc/news/v3/content/nyt/sports.json?";
	const _apiKey = "api-key=jdP4pulTmkCiZTYlNaSrWPmBDA43gFn3";

	const getNews = async () => {
		const res = await request(`${_apiBase}limit=9&${_apiKey}`);
		return res.results.map(_dataTransform);
	};

	const _dataTransform = (data) => {
		return {
			date: data.published_date,
			title: data.title,
			description:
				data.abstract.length > 0
					? data.abstract
					: data.multimedia[2].caption,
			thumbnail: data.multimedia[2].url,
			homepage: data.url,
		};
	};

	return {
		error,
		clearError,
		getNews,
	};
};

export { useNewsRequest };
