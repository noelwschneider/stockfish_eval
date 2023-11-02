import colorflip from "./global/colorflip";
import imbalance_total from "./imbalance/imbalance_total";
import king_eg from "./king/king_eg";
import mobility_eg from "./mobility/mobility_eg";
import passed_eg from "./passed_pawns/passed_eg";
import pawns_eg from "./pawns/pawns_eg";
import pieces_eg from "./pieces/pieces_eg";
import piece_value_eg from "./material/piece_value_eg";
import psqt_eg from "./material/psqt_eg";
import threats_eg from "./threat/threats_eg";
import winnable_total_eg from "./winnable/winnable_total_eg";


export default function end_game_evaluation(pos, nowinnable) {
    var v = 0;
    v += piece_value_eg(pos) - piece_value_eg(colorflip(pos));
    v += psqt_eg(pos) - psqt_eg(colorflip(pos));
    v += imbalance_total(pos);
    v += pawns_eg(pos) - pawns_eg(colorflip(pos));
    v += pieces_eg(pos) - pieces_eg(colorflip(pos));
    v += mobility_eg(pos) - mobility_eg(colorflip(pos));
    v += threats_eg(pos) - threats_eg(colorflip(pos));
    v += passed_eg(pos) - passed_eg(colorflip(pos));
    v += king_eg(pos) - king_eg(colorflip(pos));
    if (!nowinnable) v += winnable_total_eg(pos, v);
    return v;
  }