import bishop_xray_attack from "../attack/bishop_xray_attack";
import board from "../global/board";
import knight_attack from "../attack/knight_attack";
import mobility_area from "./mobility_area";
import rook_xray_attack from "../attack/rook_xray_attack";
import queen_attack from "../attack/queen_attack";
import sum from "../global/sum";


export default function mobility(pos, square) {
    if (square == null) return sum(pos, mobility);
    var v = 0;  
    var b = board(pos, square.x, square.y);
    if ("NBRQ".indexOf(b) < 0) return 0;
    for (var x = 0; x < 8; x++) {
      for(var y = 0; y < 8; y++) {
        var s2 = {x:x, y:y};
        if (!mobility_area(pos, s2)) continue;
        if (b == "N" && knight_attack(pos, s2, square) && board(pos, x, y) != 'Q') v++;
        if (b == "B" && bishop_xray_attack(pos, s2, square) && board(pos, x, y) != 'Q') v++;
        if (b == "R" && rook_xray_attack(pos, s2, square)) v++;
        if (b == "Q" && queen_attack(pos, s2, square)) v++;
      }
    }
    return v;
  }