import board from "../global/board";
import sum from "../global/sum";


export default function bishop_xray_pawns(pos, square) {
    if (!square) return sum(pos, bishop_xray_pawns);
    if (board(pos, square.x, square.y) !== "B") return 0;
    let count = 0;
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (board(pos, x, y) === "p"
         && Math.abs(square.x-x) === Math.abs(square.y-y)) count++;
      }
    }
    return count;
  }