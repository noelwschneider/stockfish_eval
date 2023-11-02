import board from "../global/board";
import sum from "../global/sum";


export default function rook_on_queen_file(pos, square) {
    if (square == null) return sum(pos, rook_on_queen_file);
    if (board(pos, square.x, square.y) != "R") return 0;
    for (var y = 0; y < 8; y++) {
      if (board(pos, square.x, y).toUpperCase() == "Q") return 1;
    }
    return 0;
  }