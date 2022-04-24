

import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import { profileReducer } from "./profile/reducer";
import { factsReducer } from "./facts/reducer";

const persistConfig = {
    key: 'myapp',
    storage,
};

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    facts: factsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware),
);

export const persistor = persistStore(store);

