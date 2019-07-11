import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* fetchComments(action) {
    try {
        const commentResponse = yield axios.get(`api/comments`);
        yield put({ type: `SET_COMMENTS`, payload: commentResponse.data });
    } catch (error) {
        console.log('Error FETCHING Comments', error);
    }
}

function* postComment(action) {
    try {
        yield axios.post('api/comments', action.payload);
        const commentResponse = yield axios.get('api/comments');
        yield put({ type: 'SET_COMMENTS', payload: commentResponse.data });
    } catch (error) {
        console.log('Error POSTING Comment', error);
    }
}

function* commentSaga() {
    yield takeLatest(`FETCH_COMMENTS`, fetchComments);
    yield takeLatest(`SET_COMMENT`, postComment);
}

export default commentSaga;