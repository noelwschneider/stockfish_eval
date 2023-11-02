import bishop_xray_attack from "../attack/bishop_xray_attack";
import board from "../global/board";
import king_attackers_count from "../king/king_attackers_count"
import knight_attack from "../attack/knight_attack";
import queen_attack from "../attack/queen_attack";
import rook_xray_attack from "../attack/rook_xray_attack";
import sum from "../global/sum";



export default function king_attacks(pos, square) {
    if (square == null) return sum(pos, king_attacks);
    if ("NBRQ".indexOf(board(pos, square.x, square.y)) < 0) return 0;
    if (king_attackers_count(pos, square) == 0) return 0;
    let kx = 0, ky = 0, v = 0;
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (board(pos, x, y) == "k") { kx = x; ky = y; }
      }
    }
    for (let x = kx - 1; x <= kx + 1; x++) {
      for (let y = ky - 1; y <= ky + 1; y++) {
        let s2 = {x:x,y:y};
        if (x >= 0 && y >= 0 && x <= 7 && y <= 7 && (x != kx || y != ky)) {
          v += knight_attack(pos, s2, square);
          v += bishop_xray_attack(pos, s2, square);
          v += rook_xray_attack(pos, s2, square);
          v += queen_attack(pos, s2, square);
        }
      }
    }
    return v;
  }