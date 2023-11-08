import board from "../global/board";
import outpost_square from "./outpost_square";
import sum from "../global/sum";


export default function outpost(pos, square) {
    if (!square) return sum(pos, outpost);
    if (board(pos, square.x, square.y) !== "N"
     && board(pos, square.x, square.y) !== "B") return 0;
    if (!outpost_square(pos, square)) return 0;
    return 1;
  }