import attack from "../attack/attack";
import colorflip from "../global/colorflip";
import pawn_attack from "../attack/pawn_attack";
import sum from "../global/sum";


export default function restricted(pos, square) {
    if (square == null) return sum(pos, restricted);
    if (attack(pos, square) == 0) return 0;
    var pos2 = colorflip(pos);
    if (!attack(pos2, {x:square.x,y:7-square.y})) return 0;
    if (pawn_attack(pos2, {x:square.x,y:7-square.y}) > 0) return 0;
    if (attack(pos2, {x:square.x,y:7-square.y}) > 1 && attack(pos, square) == 1) return 0;
    return 1;
  }