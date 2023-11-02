import board from "../global/board";
import sum from "../global/sum";


export default function rook_on_file(pos, square) {
    if (square == null) return sum(pos, rook_on_file);
    if (board(pos, square.x, square.y) != "R") return 0;
    var open = 1;
    for (var y = 0; y < 8; y++) {
      if (board(pos, square.x, y) == "P") return 0;
      if (board(pos, square.x, y) == "p") open = 0;
    }
    return open + 1;
  }