import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* postComment(action) {
    try {
        console.log(action.payload);
        yield axios.post('api/comments', action.payload);
        const commentResponse = yield axios.get('api/comments');
        yield put({type:'SET_COMMENTS', payload: commentResponse.data}); // make comment reducer
    } catch (error) {
        console.log('Error POSTING Comment', error);
    }
}

function* commentSaga() {
    yield takeLatest(`SET_COMMENT`, postComment);
}

export default commentSaga;