import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* getSelfies(action) {
    try {
        const selfieResponse = yield axios.get('/api/selfies');
        console.log(selfieResponse.data);
        
        yield put ({type:`SET_SELFIES`, payload: selfieResponse.data});
    } catch (error) {
        console.log(`ERROR getting selfies`, error);
    }
}

function* selfiesSaga() {
    yield takeLatest(`FETCH_SELFIES`, getSelfies);
}

export default selfiesSaga;