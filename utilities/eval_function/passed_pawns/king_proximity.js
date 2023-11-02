import board from "../global/board";
import passed_leverable from "./passed_leverable";
import rank from "../helpers/rank";
import sum from "../global/sum";

export default function king_proximity(pos, square) {
    if (square == null) return sum(pos, king_proximity);
    if (!passed_leverable(pos, square)) return 0;
    var r = rank(pos, square)-1;
    var w = r > 2 ? 5 * r - 13 : 0;
    var v = 0;
    if (w <= 0) return 0;
    for (var x = 0; x < 8; x++) {
      for (var y = 0; y < 8; y++) {
        if (board(pos, x, y) == "k") {
          v += ((Math.min(Math.max(Math.abs(y - square.y + 1),
                          Math.abs(x - square.x)),5) * 19 / 4) << 0) * w;
        }
        if (board(pos, x, y) == "K") {
          v -= Math.min(Math.max(Math.abs(y - square.y + 1),
                        Math.abs(x - square.x)),5) * 2 * w;
          if (square.y > 1) {
            v -= Math.min(Math.max(Math.abs(y - square.y + 2),
                        Math.abs(x - square.x)),5) * w;
          }
        }
      }
    }
    return v;
  }