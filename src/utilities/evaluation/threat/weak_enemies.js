import attack from "../attack/attack";
import board from "../global/board";
import colorflip from "../global/colorflip";
import sum from "../global/sum";



export default function weak_enemies(pos, square) {
    if (!square) return sum(pos, weak_enemies);
    if ("pnbrqk".indexOf(board(pos, square.x, square.y)) < 0) return 0;
    if (board(pos, square.x - 1, square.y - 1) === "p") return 0;
    if (board(pos, square.x + 1, square.y - 1) === "p") return 0;
    if (!attack(pos, square)) return 0;
    if (attack(pos, square) <= 1
     && attack(colorflip(pos),{x:square.x,y:7-square.y}) > 1) return 0
    return 1;
  }