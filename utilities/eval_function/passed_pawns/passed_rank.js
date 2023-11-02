import passed_leverable from "./passed_leverable";
import rank from "../helpers/rank";
import sum from "../global/sum";


export default function passed_rank(pos, square) {
    if (square == null) return sum(pos, passed_rank);
    if (!passed_leverable(pos, square)) return 0;
    return rank(pos, square) - 1;
  }