import flank_attack from "./flank_attack";
import king_danger from "./king_danger";
import pawnless_flank from "./pawnless_flank";
import shelter_storm from "./shelter_storm";
import shelter_strength from "./shelter_strength";


export default function king_mg(pos) {
    let value = 0;
    let kingDanger = king_danger(pos);

    value -= shelter_strength(pos);
    value += shelter_storm(pos);
    value += (kingDanger * kingDanger / 4096) << 0;
    value += 8 * flank_attack(pos);
    value += 17 * pawnless_flank(pos);
    return value;
}