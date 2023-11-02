import board from "../global/board";
import king_distance from "../helpers/king_distance";
import sum from "../global/sum";


export default function king_protector(pos, square) {
    if (square == null) return sum(pos, king_protector);
    if (board(pos, square.x, square.y) != "N"
     && board(pos, square.x, square.y) != "B") return 0;
    return king_distance(pos, square);
  }