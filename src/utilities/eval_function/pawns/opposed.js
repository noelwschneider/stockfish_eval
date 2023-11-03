import board from "../global/board";
import sum from "../global/sum";


export default function opposed(pos, square) {
    if (square === null) return sum(pos, opposed);
    if (board(pos, square.x, square.y) !== "P") return 0;
    for (let y = 0; y < square.y; y++) {
      if (board(pos, square.x, y) === "p") return 1;
    }
    return 0;
  }