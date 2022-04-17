import { ADD_CHAT, DELETE_CHAT } from "./action"

const initialState = [];

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return [
                ...state,
                action.payload.chat,
            ];
        case DELETE_CHAT: {
            const newChatList = state.filter(item => item.chatId !== action.payload.chatId);
            return newChatList;
        }
        default:
            return state;
    }
};
