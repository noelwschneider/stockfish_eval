import board from "../global/board";


export default function king_pawn_distance(pos, square) {
    let v = 6, kx = 0, ky = 0, px = 0, py = 0;
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            if (board(pos, x, y) === "K") {
                kx = x;
                ky = y;
            }
        }
    }
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            let dist = Math.max(Math.abs(x - kx), Math.abs(y - ky));
            if (board(pos, x, y) === "P" && dist < v) { px = x; py = y; v = dist; }
        }
    }
    if (!square || square.x === px && square.y === py) return v;
    return 0;
}