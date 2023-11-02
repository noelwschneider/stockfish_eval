import board from "../global/board";
import sum from "../global/sum";

export default function bishop_count(pos, square) {
    if (square == null) return sum(pos, bishop_count);
    if (board(pos, square.x, square.y) == "B") return 1;
    return 0;
}