import { ADD_CHAT, DELETE_CHAT } from "../chats/action";
import { ADD_MESSAGE } from "./action";

const initialState = {};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const currentList = state[action.payload.chatId] || [];
            return {
                ...state,
                [action.payload.chatId]: [
                    ...currentList,
                    action.payload.message,
                ]
            };
        }
        case ADD_CHAT:
            return {
                ...state,
                [action.payload.chat.chatId]: [],
            }
        case DELETE_CHAT: {
            return delete state[action.payload.chatId];
        }
        default:
            return state;
    }
};

