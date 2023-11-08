import board from "../global/board";
import king_attackers_count from "../king/king_attackers_count";
import king_ring from "../helpers/king_ring";
import sum from "../global/sum";


export default function rook_on_king_ring(pos, square) {
    if (!square) return sum(pos, rook_on_king_ring);
    if (board(pos, square.x, square.y) !== "R") return 0;
    if (king_attackers_count(pos, square) > 0) return 0;
    for (let y = 0; y < 8; y++) {
      if (king_ring(pos, {x:square.x, y:y})) return 1;
    }
    return 0;
  }