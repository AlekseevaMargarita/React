
import { onValue, push, ref, remove, set } from "firebase/database";
import { db } from "../services/firebase";
import { updateChats } from "../store/chats/action";
import { updateMessages } from "../store/messages/action";

export const initTrackerWithFB = () => async (dispatch) => {
    const chatRef = ref(db, 'chats');
    onValue(chatRef, (snapshot) => {
        const chatArr = [];
        snapshot?.forEach((chat) => {
            chatArr.push(chat.val());
        })
        dispatch(updateChats(chatArr));
    });
};

export const addChatWithFB = (name) => async () => {
    const getChatRefById = (chatId) => ref(db, `/chats/${chatId}`);
    const getMessagesRefByChatId = (chatId) => ref(db, `messages/${chatId}`);
    const newId = `chat${Date.now()}`;
    const newChat = {
        chatId: newId,
        name: name,
    }
    set(getChatRefById(newId), newChat);
    set(getMessagesRefByChatId(newId), {});
};

export const deleteChatWithFB = (id) => async () => {
    const chatRef = ref(db, `chats/${id}`);
    const messagesRef = ref(db, `messages/${id}`);
    remove(chatRef);
    remove(messagesRef);
};

export const initMessagesTrackerWithFB = () => async (dispatch) => {
    const messagesRef = ref(db, 'messages');
    onValue(messagesRef, (snapshot) => {
        const msgsObj = {};
        snapshot.forEach((chatMsgsSnap) => {
            msgsObj[chatMsgsSnap.key] = Object.values(chatMsgsSnap.val());
        });
        dispatch(updateMessages(msgsObj));
    });
};

export const addMessageWithFB = (chatId, newMessage) => async () => {
    const getMessagesRefByChatId = (chatId) => ref(db, `messages/${chatId}`);
    push(getMessagesRefByChatId(chatId), newMessage);
};

