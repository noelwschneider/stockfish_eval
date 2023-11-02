import colorflip from "./global/colorflip";
import non_pawn_material from "./material/non_pawn_material";


export default function phase(pos) {
    let midgameLimit = 15258, endgameLimit  = 3915;
    let npm = non_pawn_material(pos) + non_pawn_material(colorflip(pos));
    npm = Math.max(endgameLimit, Math.min(npm, midgameLimit));
    return (((npm - endgameLimit) * 128) / (midgameLimit - endgameLimit)) << 0;
  }