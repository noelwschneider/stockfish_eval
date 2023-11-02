import board from "../global/board";
import rook_xray_attack from "../attack/rook_xray_attack";
import sum from "../global/sum";
import weak_enemies from "./weak_enemies";


export default function rook_threat(pos, square) {
    if (square == null) return sum(pos, rook_threat);
    let type = "pnbrqk".indexOf(board(pos, square.x, square.y));
    if (type < 0) return 0;
    if (!weak_enemies(pos, square)) return 0;
    if (!rook_xray_attack(pos, square)) return 0;
    return type + 1;
  }