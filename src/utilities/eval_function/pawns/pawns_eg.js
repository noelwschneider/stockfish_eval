import backward from "./backward";
import blocked from "./blocked";
import connected from "./connected";
import connected_bonus from "./connected_bonus";
import doubled from "./doubled";
import doubled_isolated from "./doubled_isolated";
import isolated from "./isolated";
import getRank from "../helpers/getRank";
import sum from "../global/sum";
import weak_lever from "./weak_lever";
import weak_unopposed_pawn from "./weak_unopposed_pawn";


export default function pawns_eg(pos, square) {
    if (square === null) return sum(pos, pawns_eg);
    let v = 0;
    if (doubled_isolated(pos, square)) v -= 56;
    else if (isolated(pos, square)) v -= 15;
    else if (backward(pos, square)) v -= 24;
    v -= doubled(pos, square) * 56;
    v += connected(pos, square) ?  connected_bonus(pos, square) * (getRank(pos, square) - 3) / 4 << 0 : 0;
    v -= 27 * weak_unopposed_pawn(pos, square);
    v -= 56 * weak_lever(pos, square);
    v += [0,-4,4][blocked(pos, square)];
    return v;
  }