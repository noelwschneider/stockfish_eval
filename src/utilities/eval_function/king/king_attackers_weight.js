import board from "../global/board";
import king_attackers_count from "./king_attackers_count";
import sum from "../global/sum";


export default function king_attackers_weight(pos, square) {
    if (square === null) return sum(pos, king_attackers_weight);
    if (king_attackers_count(pos, square)) {
      return [0,81,52,44,10]["PNBRQ".indexOf(board(pos, square.x, square.y))];
    }
    return 0;
  }