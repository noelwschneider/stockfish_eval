import king_proximity from "./king_proximity";
import passed_block from "./passed_block";
import passed_file from "./passed_file";
import passed_leverable from "./passed_leverable";
import passed_rank from "./passed_rank";
import sum from "../global/sum";


export default function passed_eg(pos, square) {
    if (square == null) return sum(pos, passed_eg);
    if (!passed_leverable(pos, square)) return 0;
    var v = 0;
    v += king_proximity(pos, square);
    v += [0,28,33,41,72,177,260][passed_rank(pos, square)];
    v += passed_block(pos, square);
    v -= 8 * passed_file(pos, square);
    return v;
  }