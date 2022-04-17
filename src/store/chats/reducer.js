import { ADD_CHAT } from "./action"

const initialState = [];

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return [
                ...state,
                action.payload.chat,
            ];
        /*         case DELETE_CHAT:
                    return [
                        ...state,
        
                    ] */
        default:
            return state;
    }
};
