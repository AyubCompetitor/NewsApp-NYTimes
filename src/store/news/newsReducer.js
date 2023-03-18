import { ADD_NEWS } from "./newsAction";

export const newsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_NEWS:
            return action.payload
        default:
            return state;
    }
}