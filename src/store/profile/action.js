
export const TOGGLE_NAME = 'TOGGLE_NAME';
export const SET_NAME = 'SET_NAME';

export const toggleName = {
    type: TOGGLE_NAME,
};

export const setName = (name) => ({
    type: SET_NAME,
    payload: {
        name,
    },
});