import psqt_bonus from "./psqt_bonus";
import sum from "../global/sum";


export default function psqt_eg(pos, square) {
    if (square == null) return sum(pos, psqt_eg);
    return psqt_bonus(pos, square, false);
  }
  