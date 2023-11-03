import board from "../global/board";
import sum from "../global/sum";


export default function minor_behind_pawn(pos, square) {
    if (square === null) return sum(pos, minor_behind_pawn);
    if (board(pos, square.x, square.y) !== "B"
     && board(pos, square.x, square.y) !== "N") return 0;
    if (board(pos, square.x, square.y - 1).toUpperCase() !== "P") return 0;
    return 1;
  }