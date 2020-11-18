import {SET_USER} from "../actions/actionTypes";

const initState = {
    currentUser: null
};

export const userReducer = (state = initState, action) => {
    if (action.type === SET_USER) {
        let payload = action.payload;
        state = { ...payload };
        return state;
    }
    return state;
};
