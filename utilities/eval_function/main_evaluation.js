import end_game_evaluation from "./eng_game_evaluation";
import middle_game_evaluation from "./middle_game_evaluation";
import phase from "./phase";
import scale_factor from "./scale_factor";
import tempo from "./tempo";


export default function main_evaluation(pos) {
    var mg = middle_game_evaluation(pos);
    var eg = end_game_evaluation(pos);
    var p = phase(pos), rule50 = rule50(pos);
    eg = eg * scale_factor(pos, eg) / 64;
    var v = (((mg * p + ((eg * (128 - p)) << 0)) / 128) << 0);
    if (arguments.length == 1) v = ((v / 16) << 0) * 16;
    v += tempo(pos);
    v = (v * (100 - rule50) / 100) << 0;
    return v;
  }