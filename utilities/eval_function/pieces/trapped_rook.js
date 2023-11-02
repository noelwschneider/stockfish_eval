import board from "../global/board";
import mobility from "../mobility/mobility"
import rook_on_file from "./rook_on_file";
import sum from "../global/sum";


export default function trapped_rook(pos, square) {
    if (square == null) return sum(pos, trapped_rook);
    if (board(pos, square.x, square.y) != "R") return 0;
    if (rook_on_file(pos, square)) return 0;
    if (mobility(pos, square)> 3) return 0;
    var kx = 0, ky = 0;
    for (var x = 0; x < 8; x++) {
      for (var y = 0; y < 8; y++) {
        if (board(pos, x, y) == "K") { kx = x; ky = y; }
      }
    }
    if ((kx < 4) != (square.x < kx)) return 0;
    return 1;
  }