import colorflip from "./global/colorflip";
import imbalance_total from "./imbalance/imbalance_total";
import king_mg from "./king/king_mg";
import mobility_mg from "./mobility/mobility_mg";
import passed_mg from "./passed_pawns/passed_mg";
import pawns_mg from "./pawns/pawns_mg";
import pieces_mg from "./pieces/pieces_mg";
import piece_value_mg from "./material/piece_value_mg";
import psqt_mg from "./material/psqt_mg";
import space from "./winnable/winnable";
import threats_mg from "./threat/threats_mg";
import winnable_total_mg from "./winnable/winnable_total_mg";


export default function middle_game_evaluation(pos, nowinnable) {
    var v = 0;
    v += piece_value_mg(pos) - piece_value_mg(colorflip(pos));
    v += psqt_mg(pos) - psqt_mg(colorflip(pos));
    v += imbalance_total(pos);
    v += pawns_mg(pos) - pawns_mg(colorflip(pos));
    v += pieces_mg(pos) - pieces_mg(colorflip(pos));
    v += mobility_mg(pos) - mobility_mg(colorflip(pos));
    v += threats_mg(pos) - threats_mg(colorflip(pos));
    v += passed_mg(pos) - passed_mg(colorflip(pos));
    v += space(pos) - space(colorflip(pos));
    v += king_mg(pos) - king_mg(colorflip(pos));
    if (!nowinnable) v += winnable_total_mg(pos, v);
    return v;
  }