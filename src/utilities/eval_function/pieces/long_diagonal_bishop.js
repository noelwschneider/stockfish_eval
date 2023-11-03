import board from "../global/board";
import sum from "../global/sum";


export default function long_diagonal_bishop(pos, square) {
    if (!square) return sum(pos, long_diagonal_bishop);
    if (board(pos, square.x, square.y) !== "B") return 0;
    if (square.x - square.y !== 0 && square.x - (7 - square.y) !== 0) return 0;
    let x1 = square.x, y1 = square.y;
    if (Math.min(x1,7-x1) > 2) return 0;
    for (let i = Math.min(x1,7-x1); i < 4; i++) {
      if (board(pos, x1, y1) === "p") return 0;
      if (board(pos, x1, y1) === "P") return 0;
      if (x1 < 4) x1++; else x1--;
      if (y1 < 4) y1++; else y1--;
    }
    return 1;
  }