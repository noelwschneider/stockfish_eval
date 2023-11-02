import colorflip from "../global/colorflip";
import queen_attack from "../attack/queen_attack";
import sum from "../global/sum";
import weak_enemies from "./weak_enemies";


export default function weak_queen_protection(pos, square) {
    if (square == null) return sum(pos, weak_queen_protection);
    if (!weak_enemies(pos, square)) return 0;
    if (!queen_attack(colorflip(pos), {x:square.x,y:7-square.y})) return 0;
    return 1;
  }