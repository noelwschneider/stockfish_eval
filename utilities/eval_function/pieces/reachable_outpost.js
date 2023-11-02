import bishop_xray_attack from "../attack/bishop_xray_attack";
import board from "../global/board";
import knight_attack from "../attack/knight_attack";
import outpost_square from "./outpost_square";
import sum from "../global/sum";


export default function reachable_outpost(pos, square) {
    if (square == null) return sum(pos, reachable_outpost);
    if (board(pos, square.x, square.y) != "B"
     && board(pos, square.x, square.y) != "N") return 0;
    var v = 0;
    for (var x = 0; x < 8; x++) {
      for (var y = 2; y < 5; y++) {
        if ((board(pos, square.x, square.y) == "N"
          && "PNBRQK".indexOf(board(pos, x, y)) < 0
          && knight_attack(pos, {x:x,y:y}, square)
          && outpost_square(pos, {x:x,y:y}))
         || (board(pos, square.x, square.y) == "B"
          && "PNBRQK".indexOf(board(pos, x, y)) < 0
          && bishop_xray_attack(pos, {x:x,y:y}, square)
          && outpost_square(pos, {x:x,y:y}))) {
          var support = board(pos, x - 1, y + 1) == "P" || board(pos, x + 1, y + 1) == "P" ? 2 : 1;
          v = Math.max(v, support);
        }
      }
    }
    return v;
  }