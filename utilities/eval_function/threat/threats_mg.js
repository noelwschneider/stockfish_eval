import hanging from "./hanging";
import king_threat from "./king_threat";
import knight_on_queen from "./knight_on_queen";
import minor_threat from "./minor_threat";
import pawn_push_threat from "./pawn_push_threat";
import restricted from "./restricted";
import rook_threat from "./rook_threat";
import slider_on_queen from "./slider_on_queen";
import threat_safe_pawn from "./threat_safe_pawn";
import weak_queen_protection from "./weak_queen_protection";


export default function threats_mg(pos) {
    var v = 0;
    v += 69 * hanging(pos);
    v += king_threat(pos) > 0 ? 24 : 0;
    v += 48 * pawn_push_threat(pos);
    v += 173 * threat_safe_pawn(pos);
    v += 60 * slider_on_queen(pos);
    v += 16 * knight_on_queen(pos);
    v += 7 * restricted(pos);
    v += 14 * weak_queen_protection(pos);
    for (var x = 0; x < 8; x++) {
      for (var y = 0; y < 8; y++) {
        var s = {x:x,y:y};
        v += [0,5,57,77,88,79,0][minor_threat(pos, s)];
        v += [0,3,37,42,0,58,0][rook_threat(pos, s)];
      }
    }
    return v;
  }