import board from "../global/board";
import sum from "../global/sum";


export default function weak_lever(pos, square) {
    if (!square) return sum(pos, weak_lever);
    if (board(pos, square.x, square.y) !== "P") return 0;
    if (board(pos, square.x - 1, square.y - 1) !== "p") return 0;
    if (board(pos, square.x + 1, square.y - 1) !== "p") return 0;
    if (board(pos, square.x - 1, square.y + 1) === "P") return 0;
    if (board(pos, square.x + 1, square.y + 1) === "P") return 0;
    return 1;
  }