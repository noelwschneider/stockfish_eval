import endgame_shelter from "./endgame_shelter";
import king_danger from "./king_danger";
import king_pawn_distance from "./shelter_strength";
import pawnless_flank from "./pawnless_flank";


export default function king_eg(pos) {
    var v = 0;
    v -= 16 * king_pawn_distance(pos);
    v += endgame_shelter(pos);
    v += 95 * pawnless_flank(pos);
    v += (king_danger(pos) / 16) << 0;
    return v;
  }