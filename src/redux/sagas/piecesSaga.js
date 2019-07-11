import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* getPieces(action) {
    try {
        const piecesResponse = yield axios.get('/api/pieces');
        yield put({ type: 'SET_PIECES', payload: piecesResponse.data });
    } catch (error) {
        console.log('Error fetching artists', error);
    }
}

function* piecesSaga() {
    yield takeLatest('FETCH_PIECES', getPieces);

}

export default piecesSaga;