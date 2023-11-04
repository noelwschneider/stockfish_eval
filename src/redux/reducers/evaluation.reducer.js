export default function evaluation (state = startingPosition, action) {
    switch(action.type) {
        case 'SET_EVALUATION':
            return action.payload
        default:
            return state;
    }
}


const startingPosition = {
    
}