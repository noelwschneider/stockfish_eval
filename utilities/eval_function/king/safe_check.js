import attack from "../attack/attack";
import board from "../global/board";
import check from "./check";
import colorflip from "../global/colorflip";
import queen_attack from "../attack/queen_attack";
import sum from "../global/sum";
import weak_squares from "./weak_squares";


export default function safe_check(pos, square, type) {
    if (square == null) return sum(pos, safe_check, type);
    if ("PNBRQK".indexOf(board(pos, square.x, square.y)) >= 0) return 0;
    if (!check(pos, square, type)) return 0;
    var pos2 = colorflip(pos);
    if (type == 3 && safe_check(pos, square, 2)) return 0;
    if (type == 1 && safe_check(pos, square, 3)) return 0;
    if ((!attack(pos2, {x:square.x,y:7-square.y})
      || (weak_squares(pos, square) && attack(pos, square) > 1))
      && (type != 3 || !queen_attack(pos2, {x:square.x,y:7-square.y}))) return 1;
    return 0;
  }