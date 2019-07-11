import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* postArtist(action) {
    try {
        yield axios.post('/api/add-artist', action.payload)
    } catch (error) {
        console.log('Error POSTING Comment', error);
    }
}

function* postArtistSaga() {
    yield takeLatest(`POST_ARTIST`, postArtist);
}

export default postArtistSaga;