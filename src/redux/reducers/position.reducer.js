import getEvaluation from "../../utilities/getEvaluation";


export default function position (state = startingPosition, action) {
    switch(action.type) {
        case 'SET_POSITION':
            return action.payload
        default:
            return state;
    }
}

const startingPosition = {
    // chessboard
    board: [["r", "p", "-", "-", "-", "-", "P", "R"],
    ["n", "p", "-", "-", "-", "-", "P", "N"],
    ["b", "p", "-", "-", "-", "-", "P", "B"],
    ["q", "p", "-", "-", "-", "-", "P", "Q"],
    ["k", "p", "-", "-", "-", "-", "P", "K"],
    ["b", "p", "-", "-", "-", "-", "P", "B"],
    ["n", "p", "-", "-", "-", "-", "P", "N"],
    ["r", "p", "-", "-", "-", "-", "P", "R"]],

    // castling rights
    castleRights: [true, true, true, true],

    // enpassant
    enPassantCandidates: null,

    // side to move
    whiteToMove: true,

    // move counts
    moveCounters: [0, 1],
}
startingPosition.evaluation = getEvaluation(startingPosition);