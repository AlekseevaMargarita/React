import { SET_NAME, TOGGLE_NAME } from "./action";

const initialState = {
    showName: true,
    name: 'NoName',
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_NAME:
            return {
                ...state,
                showName: action.payload.value,
            };
        case SET_NAME:
            return {
                ...state,
                name: action.payload.name,
            };
        default:
            return state;
    }
};