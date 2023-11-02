import board from "../global/board";
import connected from "./connected";
import opposed from "./opposed";
import phalanx from "./phalanx";
import rank from "../helpers/rank";
import sum from "../global/sum";
import supported from "./supported";


export default function connected_bonus(pos, square) {
    if (square == null) return sum(pos, connected_bonus);
    if (!connected(pos, square)) return 0;
    var seed = [0, 7, 8, 12, 29, 48, 86];
    var op = opposed(pos, square);
    var ph = phalanx(pos, square);
    var su = supported(pos, square);
    var bl = board(pos, square.x, square.y - 1) == "p" ? 1 : 0;
    var r = rank(pos, square);
    if (r < 2 || r > 7) return 0;
    return seed[r - 1] * (2 + ph - op) + 21 * su;
  }