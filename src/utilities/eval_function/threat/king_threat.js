import board from "../global/board";
import king_attack from "../attack/king_attack";
import sum from "../global/sum";
import weak_enemies from "./weak_enemies";


export default function king_threat(pos, square) {
    if (!square) return sum(pos, king_threat);
    if ("pnbrq".indexOf(board(pos, square.x, square.y)) < 0) return 0;
    if (!weak_enemies(pos, square)) return 0;
    if (!king_attack(pos, square)) return 0;
    return 1;
  }