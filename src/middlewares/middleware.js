
import { onValue, push, ref, remove, set } from "firebase/database";
import { auth, db } from "../services/firebase";
import { updateChats } from "../store/chats/action";
import { updateMessages } from "../store/messages/action";
import { setName, toggleName } from "../store/profile/action";

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


export const initUserData = () => async (dispatch) => {
    const uid = auth.currentUser.uid;
    const userEmail = auth.currentUser.email;
    const userNameRef = ref(db, `profile/${uid}/name`);
    const userShowNameRef = ref(db, `profile/${uid}/showName`);

    onValue(userNameRef, (snapshot) => {
        let userName = snapshot.val();
        if (userName === null) {
            userName = userEmail;
            dispatch(setNameInDB(userName));
        }
        dispatch(setName(userName));
    });
    onValue(userShowNameRef, (snapshot) => {
        let userShowName = snapshot.val();
        if (userShowName === null) {
            dispatch(setShowNameInDB(false));
        }
        dispatch(toggleName(userShowName));
    });
};

export const setNameInDB = (newName) => async () => {
    const uid = auth.currentUser.uid;
    const userNameRef = ref(db, `profile/${uid}/name`);
    set(userNameRef, newName);
};

export const setShowNameInDB = (newValue) => async () => {
    const uid = auth.currentUser.uid;
    const userShowNameRef = ref(db, `profile/${uid}/showName`);
    set(userShowNameRef, newValue);
};