import king_ring from "../helpers/king_ring";
import sum from "../global/sum";
import weak_squares from "./weak_squares";


export default function weak_bonus(pos, square) {
    if (square === null) return sum(pos, weak_bonus);
    if (!weak_squares(pos, square)) return 0;
    if (!king_ring(pos, square)) return 0;
    return 1;
  }