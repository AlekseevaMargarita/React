export const UPDATE_CHATS = 'CHATS::UPDATE_CHATS';

export const updateChats = (chats) => ({
    type: UPDATE_CHATS,
    chats,
});