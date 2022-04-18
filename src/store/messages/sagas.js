import { takeLatest, put, delay } from 'redux-saga/effects';
import { AUTHORS } from '../../constants/constants';
import { addMessage, ADD_MESSAGE_WITH_SAGA } from './action';

function* onAddMessageWhitSaga(action) {
    yield put(addMessage(action.payload.chatId, action.payload.message));
    if (action.payload.message.author !== AUTHORS.BOT) {
        yield delay(1500);
        yield put(addMessage(action.payload.chatId, {
            messageId: `id${Date.now()}`,
            text: 'Ваше сообщение прочитано',
            author: AUTHORS.BOT,
        }))
    }

}

function* mySaga() {
    yield takeLatest(ADD_MESSAGE_WITH_SAGA, onAddMessageWhitSaga);
}

export default mySaga;