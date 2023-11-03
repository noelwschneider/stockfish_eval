import phalanx from "./phalanx";
import sum from "../global/sum";
import supported from "./supported";


export default function connected(pos, square) {
    if (square === null) return sum(pos, connected);
    if (supported(pos, square) || phalanx(pos, square)) return 1;
    return 0;
  }