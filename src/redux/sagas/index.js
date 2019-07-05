import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import artistSaga from './artistSaga';
import piecesSaga from './piecesSaga';
import gallerySaga from './gallerySaga';
import gallerySpecSaga from './gallerySpecSaga';
import updategallerySaga from './updateGallerySaga';
import commentSaga from './commentSaga';
import postArtistSaga from './postArtistSaga';
import postPieceSaga from './postPieceSaga';
import deletePieceSaga from './deletePieceSaga';


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    artistSaga(),
    piecesSaga(),
    gallerySaga(),
    gallerySpecSaga(),
    updategallerySaga(),
    commentSaga(),
    postArtistSaga(),
    postPieceSaga(),
    deletePieceSaga(),
  ]);
}
