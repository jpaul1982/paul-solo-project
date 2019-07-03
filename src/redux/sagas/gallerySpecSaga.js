import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* getGallerySpec(action) {
    try {
        console.log(action.payload); // <= galleryImageId 
        const gallerySpecResponse = yield axios.get(`/api/gallerySpec/${action.payload.galleryImageId}`);
        yield put({ type: `SET_SPEC`, payload: gallerySpecResponse.data });
        console.log(gallerySpecResponse.data);
        
    } catch (error) {
        console.log('Error fetching SPEC', error);
    }
}

    function* gallerySpecSaga() {
        yield takeLatest('FETCH_GALLERY_SPEC', getGallerySpec);

    }

    export default gallerySpecSaga;