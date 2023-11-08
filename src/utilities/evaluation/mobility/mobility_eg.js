import mobility_bonus from "./mobility_bonus";
import sum from "../global/sum";


export default function mobility_eg(pos, square) {
    if (!square) return sum(pos, mobility_eg);
    return mobility_bonus(pos, square, false);
  }