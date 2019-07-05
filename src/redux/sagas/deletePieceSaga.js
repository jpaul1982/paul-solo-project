import axios from 'axios';
import { takeLatest, put} from 'redux-saga/effects';

function* deletePiece(action) {
    console.log(action.payload);
    
    try {
        yield axios.delete(`api/delete-piece/${action.payload.galleryImageId}`);
        const galleryResponse = yield axios.get(`/api/artistGallery/${action.payload.galleryImageArtistId}`);
        yield put({ type: `SET_GALLERY`, payload: galleryResponse.data });
        console.log(galleryResponse.data);
        
    } catch (error) {
        console.log('Error Deleting Comment', error);
    }

}

function* deletePieceSaga() {
    yield takeLatest(`DELETE_PIECE`, deletePiece);
}

export default deletePieceSaga;