import board from "../global/board";
import sum from "../global/sum";


export default function phalanx(pos, square) {
    if (square === null) return sum(pos, phalanx);
    if (board(pos, square.x, square.y) !== "P") return 0;
    if (board(pos, square.x - 1, square.y) === "P") return 1;
    if (board(pos, square.x + 1, square.y) === "P") return 1;
    return 0;
  }