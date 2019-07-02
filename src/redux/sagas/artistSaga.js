import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* getArtists(action) {
    try {
        const artistsResponse = yield axios.get('/api/artists');
        console.log(artistsResponse);
        yield put({type:'SET_ARTISTS', payload: artistsResponse.data});
    } catch (error) {
        console.log('Error fetching artists', error);
    }
}



function* artistSaga() {
    yield takeLatest('FETCH_ARTISTS', getArtists);

}

export default artistSaga;