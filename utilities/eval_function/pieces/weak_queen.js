import board from "../global/board";
import sum from "../global/sum";


export default function weak_queen(pos, square) {
    if (square == null) return sum(pos, weak_queen);
    if (board(pos, square.x, square.y) != "Q") return 0;
    for (var i = 0; i < 8; i++) {
      var ix = (i + (i > 3)) % 3 - 1;
      var iy = (((i + (i > 3)) / 3) << 0) - 1;
      var count = 0;
      for (var d = 1; d < 8; d++) {
        var b = board(pos, square.x + d * ix, square.y + d * iy);
        if (b == "r" && (ix == 0 || iy == 0) && count == 1) return 1;
        if (b == "b" && (ix != 0 && iy != 0) && count == 1) return 1;
        if (b != "-") count++;
      }
    }
    return 0;
  }