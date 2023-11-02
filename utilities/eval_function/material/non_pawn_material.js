import board from "../global/board";
import piece_value_bonus from "./piece_value_bonus";
import sum from "../global/sum";


export default function non_pawn_material(pos, square) {
    if (square == null) return sum(pos, non_pawn_material);
    var i = "NBRQ".indexOf(board(pos, square.x, square.y));
    if (i >= 0) return piece_value_bonus(pos, square, true);
    return 0;
  }