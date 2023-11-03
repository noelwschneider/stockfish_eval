import attack from "../attack/attack";
import bishop_xray_attack from "../attack/bishop_xray_attack";
import board from "../global/board";
import colorflip from "../global/colorflip";
import knight_attack from "../attack/knight_attack";
import sum from "../global/sum";
import weak_enemies from "./weak_enemies";


export default function minor_threat(pos, square) {
    if (square === null) return sum(pos, minor_threat);
    let type = "pnbrqk".indexOf(board(pos, square.x, square.y));
    if (type < 0) return 0;
    if (!knight_attack(pos, square) && !bishop_xray_attack(pos, square)) return 0;
    if ((board(pos, square.x, square.y) === "p"
         || !(board(pos, square.x - 1, square.y - 1) === "p"
           || board(pos, square.x + 1, square.y - 1) === "p"
           || (attack(pos, square) <= 1 && attack(colorflip(pos),{x:square.x,y:7-square.y}) > 1)))
      && !weak_enemies(pos, square)) return 0;
    return type + 1;
  }