import backward from "./backward";
import isolated from "./isolated";
import opposed from "./opposed";
import sum from "../global/sum";


export default function weak_unopposed_pawn(pos, square) {
    if (square == null) return sum(pos, weak_unopposed_pawn);
    if (opposed(pos, square)) return 0;
    var v = 0;
    if (isolated(pos, square)) v++;
    else if (backward(pos, square)) v++;
    return v;
  }