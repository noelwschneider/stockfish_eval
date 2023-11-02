import board from "../global/board";
import pawn_attack from "../attack/pawn_attack";
import sum from "../global/sum";


export default function bishop_pawns(pos, square) {
    if (square == null) return sum(pos, bishop_pawns);
    if (board(pos, square.x, square.y) != "B") return 0;
    let c = (square.x + square.y) % 2, v = 0;
    let blocked = 0;
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (board(pos, x, y) == "P" && c == (x + y) % 2) v++;
        if (board(pos, x, y) == "P"
         && x > 1 && x < 6
         && board(pos, x, y - 1) != "-") blocked++;
      }
    }
    return v * (blocked + (pawn_attack(pos, square) > 0 ? 0 : 1));
  }