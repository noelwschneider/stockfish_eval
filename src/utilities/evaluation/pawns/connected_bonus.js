import board from "../global/board";
import connected from "./connected";
import opposed from "./opposed";
import phalanx from "./phalanx";
import getRank from "../helpers/getRank";
import sum from "../global/sum";
import supported from "./supported";


export default function connected_bonus(pos, square) {
    if (!square) return sum(pos, connected_bonus);
    if (!connected(pos, square)) return 0;
    let seed = [0, 7, 8, 12, 29, 48, 86];
    let op = opposed(pos, square);
    let ph = phalanx(pos, square);
    let su = supported(pos, square);
    let bl = board(pos, square.x, square.y - 1) === "p" ? 1 : 0;
    let r = getRank(pos, square);
    if (r < 2 || r > 7) return 0;
    return seed[r - 1] * (2 + ph - op) + 21 * su;
  }