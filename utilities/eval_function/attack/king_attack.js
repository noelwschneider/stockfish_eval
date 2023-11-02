import board from "../global/board";
import sum from "../global/sum";


export default function king_attack(pos, square) {
    if (square == null) return sum(pos, king_attack);
    for (var i = 0; i < 8; i++) {
        var ix = (i + (i > 3)) % 3 - 1;
        var iy = (((i + (i > 3)) / 3) << 0) - 1;
        if (board(pos, square.x + ix, square.y + iy) == "K") return 1;
    }


    return 0;
}