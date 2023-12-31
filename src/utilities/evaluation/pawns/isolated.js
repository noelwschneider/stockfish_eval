import board from "../global/board";
import sum from "../global/sum";


export default function isolated(pos, square) {
    if (!square) return sum(pos, isolated);
    if (board(pos, square.x, square.y) !== "P") return 0;
    for (let y = 0 ; y < 8; y++) {
      if (board(pos, square.x - 1, y) === "P") return 0;
      if (board(pos, square.x + 1, y) === "P") return 0;
    }
    return 1;
  }