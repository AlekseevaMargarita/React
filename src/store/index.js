import { combineReducers, createStore, applyMiddleware } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "@redux-saga/core";

import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import { profileReducer } from "./profile/reducer";
import mySaga from "./messages/sagas";

const persistConfig = {
    key: 'myapp',
    storage,
};

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware),
);

export const persistor = persistStore(store);

sagaMiddleware.run(mySaga);