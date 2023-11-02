import blockers_for_king from "../king/blockers_for_king";
import board from "../global/board";
import colorflip from "../global/colorflip";
import getRank from "../helpers/getRank";
import sum from "../global/sum";

export default function mobility_area(pos, square) {
    if (square == null) return sum(pos, mobility_area);
    if (board(pos, square.x, square.y) == "K") return 0;
    if (board(pos, square.x, square.y) == "Q") return 0;
    if (board(pos, square.x - 1, square.y - 1) == "p") return 0;
    if (board(pos, square.x + 1, square.y - 1) == "p") return 0;
    if (board(pos, square.x, square.y) == "P" &&
       (getRank(pos, square) < 4 || board(pos, square.x, square.y - 1) != "-")) return 0;
    if (blockers_for_king(colorflip(pos), {x:square.x,y:7-square.y})) return 0;
    return 1;
  }