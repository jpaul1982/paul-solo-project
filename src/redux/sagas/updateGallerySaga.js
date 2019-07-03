import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* updateGalleryItem(action) {
    try{
        console.log(action.payload);
        yield axios.put(`api/status`,{id:action.payload.galleryImage.id, status:!action.payload.galleryImage.status});
        yield put ({type: `FETCH_ARTISTS` });
    } catch (error) {
        console.log('Error Updating Gallery Item', error);
    }
}

function* updateGallerySaga() {
    yield takeLatest('UPDATE_GALLERY_ITEM', updateGalleryItem);

}

export default updateGallerySaga;