import board from "../global/board";
import pinned_direction from "./pinned_direction";
import sum from "../global/sum";



export default function pinned(pos, square) {
    if (square === null) return sum(pos, pinned);
    if ("PNBRQK".indexOf(board(pos, square.x, square.y)) < 0) return 0;
    return pinned_direction(pos, square) > 0 ? 1 : 0;
  }