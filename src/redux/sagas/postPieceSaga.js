import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* postPiece(action) {
    try {
        yield axios.post('/api/add-piece', action.payload)
    } catch (error) {
        console.log('Error POSTING Comment', error);
    }
}

function* postPieceSaga() {
    yield takeLatest(`POST_PIECE`, postPiece);
}

export default postPieceSaga;