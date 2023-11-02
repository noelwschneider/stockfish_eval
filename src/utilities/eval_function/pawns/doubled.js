import board from "../global/board";
import sum from "../global/sum";


export default function doubled(pos, square) {
    if (square == null) return sum(pos, doubled);
    if (board(pos, square.x, square.y) != "P") return 0;
    if (board(pos, square.x, square.y + 1) != "P") return 0;
    if (board(pos, square.x - 1, square.y + 1) == "P") return 0;
    if (board(pos, square.x + 1, square.y + 1) == "P") return 0;
    return 1;
  }