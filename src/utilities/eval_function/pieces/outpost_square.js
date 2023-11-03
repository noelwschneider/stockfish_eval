import board from "../global/board";
import pawn_attacks_span from "../helpers/pawn_attacks_span";
import getRank from "../helpers/getRank";
import sum from "../global/sum";


export default function outpost_square(pos, square) {
    if (square === null) return sum(pos, outpost_square);
    if (getRank(pos, square) < 4 || getRank(pos, square) > 6) return 0;
    if (board(pos, square.x - 1, square.y + 1) !== "P"
     && board(pos, square.x + 1, square.y + 1) !== "P") return 0;
    if (pawn_attacks_span(pos, square)) return 0;
    return 1;
  }