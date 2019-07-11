import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* fetchUserData(action) {
    try {
        const userDataResponse = yield axios.get('/api/users');
        yield put({ type: `SET_USER_DATA`, payload: userDataResponse })
    } catch (error) {
        console.log('Error FETCHING user data', error);
    }
}

function* fetchUserDataSaga() {
    yield takeLatest(`FETCH_USER_DATA`, fetchUserData);
}

export default fetchUserDataSaga;