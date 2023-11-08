import hanging from "./hanging";
import knight_on_queen from "./knight_on_queen";
import king_threat from "./king_threat";
import minor_threat from "./minor_threat";
import pawn_push_threat from "./pawn_push_threat";
import restricted from "./restricted";
import rook_threat from "./rook_threat";
import slider_on_queen from "./slider_on_queen";
import threat_safe_pawn from "./threat_safe_pawn";


export default function threats_eg(pos) {
    let v = 0;
    v += 36 * hanging(pos);
    v += king_threat(pos) > 0 ? 89 : 0;
    v += 39 * pawn_push_threat(pos);
    v += 94 * threat_safe_pawn(pos);
    v += 18 * slider_on_queen(pos);
    v += 11 * knight_on_queen(pos);
    v += 7 * restricted(pos);
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        let s = {x:x,y:y};
        v += [0,32,41,56,119,161,0][minor_threat(pos, s)];
        v += [0,46,68,60,38,41,0][rook_threat(pos, s)];
      }
    }
    return v;
  }