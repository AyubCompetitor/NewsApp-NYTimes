export const _apiBase =
	"https://api.nytimes.com/svc/news/v3/content/nyt/sports.json?";

export const _apiKey = process.env.REACT_APP_API_KEY;

export const getNews = async (limit = 20) => {
	const res = await fetch(`${_apiBase}limit=${limit}&api-key=${_apiKey}`);
	const data = res.json();
	return data;
};

export const _dataTransform = (data) => {

	return {
		date: data.published_date.slice(0, 10),
		time: data.published_date.slice(11, 16),
		title: data.title.length > 0 ? data.title : 'This publication has no title',
		description:
			data.abstract.length > 0
				? data.abstract.length < 247 ? data.abstract : `${data.abstract.slice(0, 247)}...`
				: 'This publication has no description',
		thumbnail: data.multimedia[1].url,
		fullImage: data.multimedia[2].url,
		homepage: data.url,
		author: data.byline.slice(3),
		link: `https://www.nytimes.com/by/${data.byline.slice(3).replace(/\s/g, '-').toLowerCase()}`
	};
};

