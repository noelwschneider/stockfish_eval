import flank_attack from "./flank_attack";
import king_danger from "./king_danger";
import pawnless_flank from "./pawnless_flank";
import shelter_storm from "./shelter_storm";
import shelter_strength from "./shelter_strength";


export default function king_mg(pos) {
    var v = 0;
    var kd = king_danger(pos);
    v -= shelter_strength(pos);
    v += shelter_storm(pos);
    v += (kd * kd / 4096) << 0;
    v += 8 * flank_attack(pos);
    v += 17 * pawnless_flank(pos);
    return v;
}