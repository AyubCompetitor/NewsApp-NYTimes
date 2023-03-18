export const ADD_NEWS = 'ADD_NEWS';

export const addNews = (news) => ({
    type: ADD_NEWS,
    payload: news,
})

export const loadNews = () => (dispatch, _, api) => {
    api.getNews().then(data => dispatch(addNews(data.results.map(api._dataTransform))));
}