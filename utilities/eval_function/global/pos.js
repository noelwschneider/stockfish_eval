export const pos = {

    // chessboard
    b: [["r", "p", "-", "-", "-", "-", "P", "R"],
    ["n", "p", "-", "-", "-", "-", "P", "N"],
    ["b", "p", "-", "-", "-", "-", "P", "B"],
    ["q", "p", "-", "-", "-", "-", "P", "Q"],
    ["k", "p", "-", "-", "-", "-", "P", "K"],
    ["b", "p", "-", "-", "-", "-", "P", "B"],
    ["n", "p", "-", "-", "-", "-", "P", "N"],
    ["r", "p", "-", "-", "-", "-", "P", "R"]],

    // castling rights
    c: [true, true, true, true],

    // enpassant
    e: null,

    // side to move
    w: true,

    // move counts
    m: [0, 1]
}