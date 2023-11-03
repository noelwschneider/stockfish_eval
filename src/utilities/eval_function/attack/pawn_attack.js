import board from "../global/board";
import sum from "../global/sum";


export default function pawn_attack(pos, square) {
    if (!square) return sum(pos, pawn_attack);
    let v = 0;
    if (board(pos, square.x - 1, square.y + 1) === "P") v++;
    if (board(pos, square.x + 1, square.y + 1) === "P") v++;
    return v;
  }