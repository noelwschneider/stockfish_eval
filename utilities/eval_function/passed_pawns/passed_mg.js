import passed_block from "./passed_block";
import passed_file from "./passed_file";
import passed_leverable from "./passed_leverable";
import passed_rank from "./passed_rank";
import sum from "../global/sum";


export default function passed_mg(pos, square) {
    if (square == null) return sum(pos, passed_mg);
    if (!passed_leverable(pos, square)) return 0;
    var v = 0;
    v += [0,10,17,15,62,168,276][passed_rank(pos, square)];
    v += passed_block(pos, square);
    v -= 11 * passed_file(pos, square);
    return v;
  }