import { UPDATE_MESSAGES } from "./action";

const initialState = {
    messages: {},
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGES:
            return {
                ...state,
                messages: action.payload.messages,
            };
        default:
            return state;
    }
};

