
import { STATUSES } from "../../constants/constants";
import { GET_FACTS_FAILURE, GET_FACTS_REQUEST, GET_FACTS_SUCCESS } from "./action";

const initialState = {
    facts: [],
    request: STATUSES.IDLE,
    error: null,
    loading: false,
};

export const factsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FACTS_REQUEST:
            return {
                ...state,
                facts: [],
                request: STATUSES.REQUEST,
                error: null,
                loading: true,

            };
        case GET_FACTS_SUCCESS:
            return {
                ...state,
                request: STATUSES.SUCCESS,
                loading: false,
                facts: action.payload,
            };
        case GET_FACTS_FAILURE:
            return {
                ...state,
                request: STATUSES.FAILURE,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};