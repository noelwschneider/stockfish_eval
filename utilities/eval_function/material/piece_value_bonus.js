import board from "../global/board";
import sum from "../global/sum";

export default function piece_value_bonus(pos, square, mg) {
    if (square == null) return sum(pos, piece_value_bonus);
    var a = mg ? [124, 781, 825, 1276, 2538]
               : [206, 854, 915, 1380, 2682];
    var i = "PNBRQ".indexOf(board(pos, square.x, square.y));
    if (i >= 0) return a[i];
    return 0;
  }