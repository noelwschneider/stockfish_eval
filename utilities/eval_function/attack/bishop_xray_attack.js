import board from "../global/board";
import pinned_direction from "./pinned_direction";
import sum from "../global/sum";


export default function bishop_xray_attack(pos, square, s2) {
    if (square == null) return sum(pos, bishop_xray_attack);
    var v = 0;
    for (var i = 0; i < 4; i++) {
      var ix = ((i > 1) * 2 - 1);
      var iy = ((i % 2 == 0) * 2 - 1);
      for (var d = 1; d < 8; d++) {
        var b = board(pos, square.x + d * ix, square.y + d * iy);
        if (b == "B"
        && (s2 == null || s2.x == square.x + d * ix && s2.y == square.y + d * iy)) {
          var dir = pinned_direction(pos, {x:square.x+d*ix, y:square.y+d*iy});
          if (dir == 0 || Math.abs(ix+iy*3) == dir) v++;
        }
        if (b != "-" && b != "Q" && b != "q") break;
      }
    }
    return v;
  }