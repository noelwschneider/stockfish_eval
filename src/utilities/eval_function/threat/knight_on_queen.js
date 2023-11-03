import attack from "../attack/attack";
import board from "../global/board";
import colorflip from "../global/colorflip";
import knight_attack from "../attack/knight_attack";
import mobility_area from "../mobility/mobility_area";
import queen_count from "../helpers/queen_count";
import sum from "../global/sum";


export default function knight_on_queen(pos, square) {
    if (!square) return sum(pos, knight_on_queen);
    let pos2 = colorflip(pos);
    let qx = -1, qy = -1;
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (board(pos, x, y) === "q") {
          if (qx >= 0 || qy >= 0) return 0;
          qx = x;
          qy = y;
        }
      }
    }
    if (queen_count(pos2) !== 1) return 0;
    if (board(pos, square.x, square.y) === "P") return 0;
    if (board(pos, square.x - 1, square.y - 1) === "p") return 0;
    if (board(pos, square.x + 1, square.y - 1) === "p") return 0;
    if (attack(pos, square) <= 1 && attack(pos2, {x:square.x, y:7-square.y}) > 1) return 0;
    if (!mobility_area(pos, square)) return 0;
    if (!knight_attack(pos, square)) return 0;
    let v = queen_count(pos) === 0 ? 2 : 1;
    if (Math.abs(qx-square.x) === 2 && Math.abs(qy-square.y) === 1) return v;
    if (Math.abs(qx-square.x) === 1 && Math.abs(qy-square.y) === 2) return v;
    return 0;
  }