import bishop_xray_attack from "../attack/bishop_xray_attack";
import board from "../global/board";
import king_ring from "../helpers/king_ring";
import knight_attack from "../attack/knight_attack";
import queen_attack from "../attack/queen_attack";
import rook_xray_attack from "../attack/rook_xray_attack";
import sum from "../global/sum";


export default function king_attackers_count(pos, square) {
    if (square == null) return sum(pos, king_attackers_count);
    if ("PNBRQ".indexOf(board(pos, square.x, square.y)) < 0) return 0;
    if (board(pos, square.x, square.y) == "P") {
      let v = 0;
      for (let dir = -1; dir <= 1; dir += 2) {
        let fr = board(pos, square.x + dir * 2, square.y) == "P";
        if (square.x + dir >= 0 && square.x + dir <= 7
         && king_ring(pos, {x:square.x+dir,y:square.y-1}, true)) v = v + (fr ? 0.5 : 1);
      }
      return v;
    }
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        let s2 = {x:x,y:y};
        if (king_ring(pos, s2)) {
          if (knight_attack(pos, s2, square)
           || bishop_xray_attack(pos, s2, square)
           || rook_xray_attack(pos, s2, square)
           || queen_attack(pos, s2, square)) return 1;
        }
      }
    }
    return 0;
  }