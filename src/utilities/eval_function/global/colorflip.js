export default function colorflip(pos) {
    let board = new Array(8);

    for (let i = 0; i < 8; i++) {
        board[i] = new Array(8)
    };

    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            board[x][y] = pos.b[x][7 - y];
            let color = board[x][y].toUpperCase() == board[x][y];
            board[x][y] = color ? board[x][y].toLowerCase() : board[x][y].toUpperCase();
        }
    }

    return {
        board: board,

        castleRights: [
            pos.castleRights[2],
            pos.castleRights[3],
            pos.castleRights[0],
            pos.castleRights[1]
        ],

        enPassantCandidates:
            pos.enPassantCandidates == null
                ? null
                : [pos.enPassantCandidates[0], 7 - pos.enPassantCandidates[1]],

        whiteToMove: !pos.whiteToMove,

        moveCounters: [pos.moveCounters[0], pos.moveCounters[1]]
    };
}