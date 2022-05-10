import { apiUrl } from "../../constants/constants";

export const GET_FACTS_REQUEST = "FACTS::GET_FACTS_REQUEST";
export const GET_FACTS_SUCCESS = "FACTS::GET_FACTS_SUCCESS";
export const GET_FACTS_FAILURE = "FACTS::GET_FACTS_FAILURE";

export const getFactsRequest = () => ({
    type: GET_FACTS_REQUEST,
});

export const getFactsSuccess = (facts) => ({
    type: GET_FACTS_SUCCESS,
    payload: facts,
});

export const getFactsFailure = (err) => ({
    type: GET_FACTS_FAILURE,
    payload: err,
});

export const getFacts = () => async (dispatch) => {
    dispatch(getFactsRequest());

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const result = await response.json();
        dispatch(getFactsSuccess(result));
    }
    catch (err) {
        dispatch(getFactsFailure(err.message));
    }
};
