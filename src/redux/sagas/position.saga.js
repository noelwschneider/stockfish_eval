import { put, takeLatest } from 'redux-saga/effects';

import fenToPosition from "../../utilities/fenToPosition";
import main_evaluation from '../../utilities/eval_function/main_evaluation';


function* makePosition(action) {
    try {
        const positionObject = yield fenToPosition(action.payload);
        
        positionObject.evaluation = main_evaluation(positionObject);
        
        yield put({type: "SET_POSITION", payload: positionObject});

        yield put({type: "GET_EVALUATION", payload: positionObject});

    } catch (error) {
        console.log('error in makePosition:', error);
    }
}

function* position() {
    yield takeLatest('MAKE_POSITION', makePosition);
}

export default position;