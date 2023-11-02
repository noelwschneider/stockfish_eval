import colorflip from "../global/colorflip";
import pinned_direction from "../attack/pinned_direction";
import sum from "../global/sum";


export default function blockers_for_king(pos, square) {
    if (square == null) return sum(pos, blockers_for_king);
    if (pinned_direction(colorflip(pos), {x:square.x,y:7-square.y})) return 1;
    return 0;
  }