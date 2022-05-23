import { UPDATE_CHATS } from "./action"

const initialState = [];

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CHATS:
            console.log(action.chats);
            return {
                ...state,
                chats: action.chats,
            }
        default:
            return state;
    }
};
