import backward from "./backward";
import blocked from "./blocked";
import connected from "./connected";
import connected_bonus from "./connected_bonus";
import doubled from "./doubled";
import doubled_isolated from "./doubled_isolated";
import isolated from "./isolated";
import sum from "../global/sum";
import weak_unopposed_pawn from "./weak_unopposed_pawn";


export default function pawns_mg(pos, square) {
    if (square == null) return sum(pos, pawns_mg);
    var v = 0;
    if (doubled_isolated(pos, square)) v -= 11;
    else if (isolated(pos, square)) v -= 5;
    else if (backward(pos, square)) v -= 9;
    v -= doubled(pos, square) * 11;
    v += connected(pos, square) ?  connected_bonus(pos, square) : 0;
    v -= 13 * weak_unopposed_pawn(pos, square);
    v += [0,-11,-3][blocked(pos, square)];
    return v;
  }