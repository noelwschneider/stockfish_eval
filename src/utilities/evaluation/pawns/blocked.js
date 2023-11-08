import board from "../global/board";
import sum from "../global/sum";


export default function blocked(pos, square) {
    if (!square) return sum(pos, blocked);
    if (board(pos, square.x, square.y) !== "P") return 0;
    if (square.y !== 2 && square.y !== 3) return 0;
    if (board(pos, square.x, square.y - 1) !== "p") return 0;
    return 4 - square.y;
  }