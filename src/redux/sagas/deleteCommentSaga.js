import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* deleteComment(action) {
    try {
        yield axios.delete(`api/delete-comment/${action.payload}`);
        const commentResponse = yield axios.get(`/api/comments`);
        yield put({ type: 'SET_COMMENTS', payload: commentResponse.data });

    } catch (error) {
        console.log('Error Deleting Comment', error);
    }

}

function* deleteCommentSaga() {
    yield takeLatest(`DELETE_COMMENT`, deleteComment);
}

export default deleteCommentSaga;