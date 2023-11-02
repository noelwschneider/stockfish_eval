import board from "../global/board";


export default function king_pawn_distance(pos, square) {
    var v = 6, kx = 0, ky = 0, px = 0, py = 0;
    for (var x = 0; x < 8; x++) {
        for (var y = 0; y < 8; y++) {
            if (board(pos, x, y) == "K") {
                kx = x;
                ky = y;
            }
        }
    }
    for (var x = 0; x < 8; x++) {
        for (var y = 0; y < 8; y++) {
            var dist = Math.max(Math.abs(x - kx), Math.abs(y - ky));
            if (board(pos, x, y) == "P" && dist < v) { px = x; py = y; v = dist; }
        }
    }
    if (square == null || square.x == px && square.y == py) return v;
    return 0;
}