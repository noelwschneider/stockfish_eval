import blockers_for_king from "./blockers_for_king";
import colorflip from "../global/colorflip";
import flank_attack from "./flank_attack";
import flank_defense from "./flank_defense";
import king_attackers_count from "./king_attackers_count";
import king_attackers_weight from "./king_attackers_weight";
import king_attacks from "./king_attacks";
import knight_defender from "./knight_defender";
import mobility_mg from "../mobility/mobility_mg";
import queen_count from "../helpers/queen_count";
import safe_check from "./safe_check";
import shelter_storm from "./shelter_storm";
import shelter_strength from "./shelter_strength";
import unsafe_checks from "./unsafe_checks"
import weak_bonus from "./weak_bonus";


export default function king_danger(pos) {
    var count = king_attackers_count(pos);
    var weight = king_attackers_weight(pos);
    var kingAttacks = king_attacks(pos);
    var weak = weak_bonus(pos);
    var unsafeChecks = unsafe_checks(pos);
    var blockersForKing = blockers_for_king(pos);
    var kingFlankAttack = flank_attack(pos);
    var kingFlankDefense = flank_defense(pos);
    var noQueen = (queen_count(pos) > 0 ? 0 : 1);
    var v = count * weight
          +  69 * kingAttacks
          + 185 * weak
          - 100 * (knight_defender(colorflip(pos)) > 0)
          + 148 * unsafeChecks
          +  98 * blockersForKing
          -   4 * kingFlankDefense
          + ((3 * kingFlankAttack * kingFlankAttack / 8) << 0)
          - 873 * noQueen
          - ((6 * (shelter_strength(pos) - shelter_storm(pos)) / 8) << 0)
          + mobility_mg(pos) - mobility_mg(colorflip(pos))
          + 37
          +  ((772 * Math.min(safe_check(pos, null, 3), 1.45)) << 0)
          + ((1084 * Math.min(safe_check(pos, null, 2), 1.75)) << 0)
          +  ((645 * Math.min(safe_check(pos, null, 1), 1.50)) << 0)
          +  ((792 * Math.min(safe_check(pos, null, 0), 1.62)) << 0);
    if (v > 100) return v;
    return 0;
  }