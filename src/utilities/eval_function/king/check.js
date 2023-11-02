import bishop_xray_attack from "../attack/bishop_xray_attack"
import board from "../global/board";
import knight_attack from "../attack/knight_attack";
import queen_attack from "../attack/queen_attack";
import rook_xray_attack from "../attack/rook_xray_attack";
import sum from "../global/sum";


export default function check(pos, square, type) {
    if (square == null) return sum(pos, check);
    if (rook_xray_attack(pos, square)
    && (type == null || type == 2 || type == 4)
     || queen_attack(pos, square)
    && (type == null || type == 3)) {
      for (let i = 0; i < 4; i++) {
        let ix = (i == 0 ? -1 : i == 1 ? 1 : 0);
        let iy = (i == 2 ? -1 : i == 3 ? 1 : 0);
        for (let d = 1; d < 8; d++) {
          let b = board(pos, square.x + d * ix, square.y + d * iy);
          if (b == "k") return 1;
          if (b != "-" && b != "q") break;
        }
      }
    }
    if (bishop_xray_attack(pos, square)
    && (type == null || type == 1 || type == 4)
     || queen_attack(pos, square)
    && (type == null || type == 3)) {
      for (let i = 0; i < 4; i++) {
        let ix = ((i > 1) * 2 - 1);
        let iy = ((i % 2 == 0) * 2 - 1);
        for (let d = 1; d < 8; d++) {
          let b = board(pos, square.x + d * ix, square.y + d * iy);
          if (b == "k") return 1;
          if (b != "-" && b != "q") break;
        }
      }
    }
    if (knight_attack(pos, square)
    && (type == null || type == 0 || type == 4)) {
      if (board(pos, square.x + 2, square.y + 1) == "k"
       || board(pos, square.x + 2, square.y - 1) == "k"
       || board(pos, square.x + 1, square.y + 2) == "k"
       || board(pos, square.x + 1, square.y - 2) == "k"
       || board(pos, square.x - 2, square.y + 1) == "k"
       || board(pos, square.x - 2, square.y - 1) == "k"
       || board(pos, square.x - 1, square.y + 2) == "k"
       || board(pos, square.x - 1, square.y - 2) == "k") return 1;
    }
    return 0;
  }