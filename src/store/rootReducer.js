import { combineReducers } from 'redux';
import { newsReducer } from './news/newsReducer';

export const rootReducer = combineReducers({
    news: newsReducer
});