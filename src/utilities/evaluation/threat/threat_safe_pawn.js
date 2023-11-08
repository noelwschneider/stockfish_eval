import board from "../global/board";
import pawn_attack from "../attack/pawn_attack";
import safe_pawn from "./safe_pawn";
import sum from "../global/sum";


export default function threat_safe_pawn(pos, square) {
    if (!square) return sum(pos, threat_safe_pawn);
    if ("nbrq".indexOf(board(pos, square.x, square.y)) < 0) return 0;
    if (!pawn_attack(pos, square)) return 0;
    if (safe_pawn(pos, {x:square.x - 1, y:square.y + 1})
     || safe_pawn(pos, {x:square.x + 1, y:square.y + 1})) return 1;
    return 0;
  }