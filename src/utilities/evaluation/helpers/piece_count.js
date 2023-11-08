import board from "../global/board";
import sum from "../global/sum";

export default function piece_count(pos, square) {
    if (!square) return sum(pos, piece_count);
    let i = "PNBRQK".indexOf(board(pos, square.x, square.y));
    return i >= 0 ? 1 : 0;
  }