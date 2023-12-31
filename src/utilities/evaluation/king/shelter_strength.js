import board from "../global/board";
import strength_square from "./strength_square";
import storm_square from "./storm_square";

export default function shelter_strength(pos, square) {
    var w = 0, s = 1024, tx = null;
    for (var x = 0; x < 8; x++) {
      for (var y = 0; y < 8; y++) {
        if (board(pos, x, y) == "k"
         || pos.castleRights[2] && x == 6 && y == 0
         || pos.castleRights[3] && x == 2 && y == 0) {
          var w1 = strength_square(pos, {x:x,y:y});
          var s1 = storm_square(pos, {x:x,y:y});
          if (s1 - w1 < s - w) { w = w1; s = s1; tx=Math.max(1,Math.min(6,x)); }
        }
      }
    }
    if (square == null) return w;
    if (tx != null && board(pos, square.x, square.y) == "p" && square.x >= tx-1 && square.x <= tx+1) {
      for (var y = square.y-1; y >= 0; y--) if (board(pos, square.x, y) == "p") return 0;
      return 1;
    }
    return 0;
  }