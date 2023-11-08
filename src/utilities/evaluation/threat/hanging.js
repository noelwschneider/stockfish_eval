import attack from "../attack/attack";
import board from "../global/board";
import colorflip from "../global/colorflip";
import sum from "../global/sum";
import weak_enemies from "./weak_enemies";


export default function hanging(pos, square) {
    if (!square) return sum(pos, hanging);
    if (!weak_enemies(pos, square)) return 0;
    if (board(pos, square.x, square.y) !== "p" && attack(pos, square) > 1) return 1;
    if (!attack(colorflip(pos), {x:square.x,y:7-square.y})) return 1;
    return 0;
  }