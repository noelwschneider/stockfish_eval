// This should probably be a class

const pos = {

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
    moveCounters: [0, 1]
}