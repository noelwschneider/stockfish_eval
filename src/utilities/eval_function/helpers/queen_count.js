import sum from "../global/sum";
import board from "../global/board";

export default function queen_count(pos, square) {
    if (square === null) return sum(pos, queen_count);
    if (board(pos, square.x, square.y) === "Q") return 1;
    return 0;
}