

export const TOGGLE_NAME = 'TOGGLE_NAME';
export const SET_NAME = 'SET_NAME';

export const toggleName = (value) => ({
    type: TOGGLE_NAME,
    payload: {
        value,
    },
});

export const setName = (name) => ({
    type: SET_NAME,
    payload: {
        name,
    },
});

