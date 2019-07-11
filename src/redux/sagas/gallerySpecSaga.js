import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* getGallerySpec(action) {
    try {
        const gallerySpecResponse = yield axios.get(`/api/gallerySpec/${action.payload.galleryImageId}`);
        yield put({ type: `SET_SPEC`, payload: gallerySpecResponse.data });
    } catch (error) {
        console.log('Error fetching SPEC', error);
    }
}

function* gallerySpecSaga() {
    yield takeLatest('FETCH_GALLERY_SPEC', getGallerySpec);

}

export default gallerySpecSaga;