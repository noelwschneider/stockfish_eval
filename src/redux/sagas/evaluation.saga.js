import { put, takeLatest } from 'redux-saga/effects';

import fenToPosition from "../../utilities/fenToPosition";
import main_evaluation from '../../utilities/eval_function/main_evaluation';


//! NOTE TO SELF: THINK ABOUT IF THIS IS HOW I WANT TO DO IT
//! BEFORE COMMITTING A BUNCH OF TIME TO IMPLEMENTING THIS

//! WHAT ABOUT JUST BUILDING OUT THE EVAL PROPERTY ON THE POSITION OBJECT?
//! HAS UPS AND DOWNS, I GUESS?

//! DO I NEED TO WRITE DISPATCHES INTO ALL OF THE EVAL, OR IS THERE A FASTER
//! / MORE FLEXIBLE WAY TO DO THAT?

function* getEvaluation({payload}) {
    try {
        const evaluationObject = {}
        
        yield put({type: "SET_EVALUATION", payload: evaluationObject});
    } catch (error) {
        console.log('error in makePosition:', error);
    }
}

function* position() {
    yield takeLatest('GET_EVALUATION', getEvaluation);
}

export default position;