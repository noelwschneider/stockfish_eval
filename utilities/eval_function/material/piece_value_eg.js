import piece_value_bonus from "./piece_value_bonus";
import sum from "../global/sum";


export default function piece_value_eg(pos, square) {
    if (square == null) return sum(pos, piece_value_eg);
    return piece_value_bonus(pos, square, false);
  }