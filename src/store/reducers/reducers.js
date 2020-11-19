import { SET_USER, SET_CHANNEL } from "../actions/actionTypes";

const userInitState = {
    currentUser: null
};

export const userReducer = (state = userInitState, action) => {
    if (action.type === SET_USER) {
        let payload = action.payload;
        state = { ...payload };
        return state;
    }
    return state;
};


const channelInitState = {
    currentChannel: null
};

export const channelReducer = (state = channelInitState, action) => {
    if (action.type === SET_CHANNEL) {
        let payload = action.payload;
        state = { ...payload };
        return state;
    }
    return state;
};
