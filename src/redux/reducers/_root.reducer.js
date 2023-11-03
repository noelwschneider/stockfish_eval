import { combineReducers } from 'redux';

import position from "./position.reducer"

const rootReducer = combineReducers({
    position,
});

export default rootReducer;