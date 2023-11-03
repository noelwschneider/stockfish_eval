import board from "../global/board";
import sum from "../global/sum";


export default function pawn_count(pos, square) {
    if (!square) return sum(pos, pawn_count);
    if (board(pos, square.x, square.y) === "P") return 1;
    return 0;
  }