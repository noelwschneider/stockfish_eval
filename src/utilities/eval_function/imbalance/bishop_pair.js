import board from "../global/board";
import bishop_count from "../helpers/bishop_count"


export default function bishop_pair(pos, square) {
    if (bishop_count(pos) < 2) return 0;
    if (!square) return 1438;
    return board(pos, square.x, square.y) === "B" ? 1 : 0;
}