import board from "../global/board";
import sum from "../global/sum";


export default function supported(pos, square) {
    if (square == null) return sum(pos, supported);
    if (board(pos, square.x, square.y) != "P") return 0;
    return (board(pos, square.x - 1, square.y + 1) == "P" ? 1 : 0)
         + (board(pos, square.x + 1, square.y + 1) == "P" ? 1 : 0);
  }