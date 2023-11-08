import board from "../global/board";
import sum from "../global/sum";


export default function backward(pos, square) {
    if (!square) {
        return sum(pos, backward);
    }

    if (board(pos, square.x, square.y) !== "P") {
        return 0;
    }
    
    for (let y = square.y; y < 8; y++) {
      if (board(pos, square.x - 1, y) === "P"
       || board(pos, square.x + 1, y) === "P") return 0;
    }
    if (board(pos, square.x - 1, square.y - 2) === "p"
     || board(pos, square.x + 1, square.y - 2) === "p"
     || board(pos, square.x    , square.y - 1) === "p") return 1;
    return 0;
  }