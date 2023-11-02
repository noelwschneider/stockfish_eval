import board from "../global/board";
import pawn_attacks_span from "../helpers/pawn_attacks_span";
import sum from "../global/sum";


export default function queen_infiltration(pos, square) {
    if (square == null) return sum(pos, queen_infiltration);
    if (board(pos, square.x, square.y) != "Q") return 0;
    if (square.y > 3) return 0;
    if (board(pos, square.x + 1, square.y - 1) == "p") return 0;
    if (board(pos, square.x - 1, square.y - 1) == "p") return 0;
    if (pawn_attacks_span(pos, square)) return 0;
    return 1;
  }