import board from "../global/board";
import sum from "../global/sum";


export default function rook_count(pos, square) {
    if (!square) return sum(pos, rook_count);
    if (board(pos, square.x, square.y) === "R") return 1;
    return 0;
}