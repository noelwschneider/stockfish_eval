import { put, takeLatest } from 'redux-saga/effects';

import fenToPosition from "../../utilities/fenToPosition";
import getEvaluation from "../../utilities/getEvaluation";


function* makePosition(action) {
    try {
        const position = yield fenToPosition(action.payload);
        position.evaluation = getEvaluation(position);
        yield put({type: "SET_POSITION", payload: position});
    } catch (error) {
        console.log('error in makePosition:', error);
    }
}

function* position() {
    yield takeLatest('MAKE_POSITION', makePosition);
}

export default position;