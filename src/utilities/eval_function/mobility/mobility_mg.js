import mobility_bonus from "./mobility_bonus";
import sum from "../global/sum";


export default function mobility_mg(pos, square) {
    if (square === null) return sum(pos, mobility_mg);
    return mobility_bonus(pos, square, true);
  }