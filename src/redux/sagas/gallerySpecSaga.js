import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* getGallerySpec(action) {
    console.log(action.payload);
    const gallerySpecResponse = yield axios.get()
    
}

function* gallerySpecSaga() {
    yield takeLatest('FETCH_GALLERY_SPEC', getGallerySpec);

}

export default gallerySpecSaga;