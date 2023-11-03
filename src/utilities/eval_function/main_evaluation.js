import end_game_evaluation from "./end_game_evaluation";
import middle_game_evaluation from "./middle_game_evaluation";
import phase from "./phase";
import scale_factor from "./scale_factor";
import tempo from "./tempo";
import rule50 from "./rule50";

export default function main_evaluation(pos) {
    let mg = middle_game_evaluation(pos);
    let eg = end_game_evaluation(pos);
    let p = phase(pos)

    // console.log('mg:', mg);
    // console.log('eg:', eg);

    // console.log('scale factor:', scale_factor(pos, eg));
    eg = eg * scale_factor(pos, eg) / 64;

    let value = (((mg * p + ((eg * (128 - p)) << 0)) / 128) << 0);

    if (arguments.length === 1) {
        value = ((value / 16) << 0) * 16;
    }

    // console.log('tempo:', tempo(pos))
    value += tempo(pos);
    value = (value * (100 - rule50(pos)) / 100) << 0;

    // console.log('final eval:', value);
    return value;
  }