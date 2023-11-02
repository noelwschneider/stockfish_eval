import attack from "../attack/attack";
import board from "../global/board";
import colorflip from "../global/colorflip";
import sum from "../global/sum";


export default function safe_pawn(pos, square) {
    if (square == null) return sum(pos, safe_pawn);
    if (board(pos, square.x, square.y) != "P") return 0;
    if (attack(pos, square)) return 1;
    if (!attack(colorflip(pos), {x:square.x,y:7-square.y})) return 1;
    return 0;
  }