import board from "../global/board";
import sum from "../global/sum";


export default function knight_count(pos, square) {
    if (square === null) return sum(pos, knight_count);
    if (board(pos, square.x, square.y) === "N") return 1;
    return 0;
}