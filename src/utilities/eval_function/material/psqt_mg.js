import sum from "../global/sum";
import psqt_bonus from "./psqt_bonus";


export default function psqt_mg(pos, square) {
    if (square == null) return sum(pos, psqt_mg);
    return psqt_bonus(pos, square, true);
  }