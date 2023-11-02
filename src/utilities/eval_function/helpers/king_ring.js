import board from "../global/board";
import sum from "../global/sum";


export default function king_ring(pos, square, full) {
    if (square == null) return sum(pos, king_ring);
    
    if (!full
        && board(pos, square.x + 1, square.y - 1) == "p"
        && board(pos, square.x - 1, square.y - 1) == "p") return 0;

    for (let ix = -2; ix <= 2; ix++) {
        for (let iy = -2; iy <= 2; iy++) {
            if (board(pos, square.x + ix, square.y + iy) == "k"
                && (ix >= -1 && ix <= 1 || square.x + ix == 0 || square.x + ix == 7)
                && (iy >= -1 && iy <= 1 || square.y + iy == 0 || square.y + iy == 7)) return 1;
        }
    }
    return 0;
}