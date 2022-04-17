
export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';

export const addChat = (chat) => ({
    type: ADD_CHAT,
    payload: {
        chat,
    },
});

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    payload: {
        chatId,
    }
});