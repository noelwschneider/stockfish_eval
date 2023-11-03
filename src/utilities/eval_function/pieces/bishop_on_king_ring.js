import board from "../global/board";
import king_attackers_count from "../king/king_attackers_count";
import king_ring from "../helpers/king_ring";
import sum from "../global/sum";


export default function bishop_on_king_ring(pos, square) {
    if (!square) return sum(pos, bishop_on_king_ring);
    if (board(pos, square.x, square.y) !== "B") return 0;
    if (king_attackers_count(pos, square) > 0) return 0;
    for (let i = 0; i < 4; i++) {
      let ix = ((i > 1) * 2 - 1);
      let iy = ((i % 2 === 0) * 2 - 1);
      for (let d = 1; d < 8; d++) {
        let x = square.x + d * ix, y = square.y + d * iy;
        if (board(pos, x, y) === "x") break;
        if (king_ring(pos, {x:x, y:y})) return 1;
        if (board(pos, x, y).toUpperCase() === "P") break;
      }
    }
    return 0;
  }