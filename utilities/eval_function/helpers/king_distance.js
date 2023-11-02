import board from "../global/board";
import sum from "../global/sum";

export default function king_distance(pos, square) {
    if (square == null) return sum(pos, king_distance);
    for (var x = 0; x < 8; x++) {
        for (var y = 0; y < 8; y++) {
            if (board(pos, x, y) == "K") {
                return Math.max(Math.abs(x - square.x), Math.abs(y - square.y));
            }
        }
    }
    return 0;
}