import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* getGallery(action) {
    try {
        console.log(action.payload); 
        const galleryResponse = yield axios.get(`/api/artistGallery/${action.payload.artistId}`);
        yield put({ type: `SET_GALLERY`, payload: galleryResponse.data });
    } catch (error) {
        console.log('Error fetching gallery', error);
    }
}

function* gallerySaga() {
    yield takeLatest('FETCH_GALLERY', getGallery);

}

export default gallerySaga;