import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* updateGalleryItem(action) {
    try {
        yield axios.put(`api/status`, { id: action.payload.galleryImage.id, status: !action.payload.galleryImage.status });
        const galleryResponse = yield axios.get(`/api/artistGallery/${action.payload.galleryImage.artist_id}`);
        yield put({ type: `SET_GALLERY`, payload: galleryResponse.data });
    } catch (error) {
        console.log('Error Updating Gallery Item', error);
    }
}

function* updateGallerySaga() {
    yield takeLatest('UPDATE_GALLERY_ITEM', updateGalleryItem);

}

export default updateGallerySaga;