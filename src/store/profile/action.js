

export const TOGGLE_NAME = 'TOGGLE_NAME';
export const SET_NAME = 'SET_NAME';

export const toggleName = (id, value) => ({
    type: TOGGLE_NAME,
    payload: {
        id,
        value,
    },
});

export const setName = (id, name) => ({
    type: SET_NAME,
    payload: {
        id,
        name,
    },
});

