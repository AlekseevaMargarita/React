import { AUTHORS } from "../../constants/constants";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message,
    },
});

let timerId;

export const addMessageWithThunk = (chatId, message) => (dispatch) => {
    dispatch(addMessage(chatId, message));

    if (timerId) {
        clearTimeout(timerId)
    }

    if (message.author !== AUTHORS.BOT) {
        timerId = setTimeout(() => {
            dispatch(
                addMessage(
                    chatId,
                    {
                        messageId: `id${Date.now()}`,
                        text: 'Ваше сообщение прочитано',
                        author: AUTHORS.BOT,
                    }
                )
            )
        }, 1500);
    }
};