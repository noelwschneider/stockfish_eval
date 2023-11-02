import attack from "../attack/attack";
import board from "../global/board";
import colorflip from "../global/colorflip";
import getRank from "../helpers/getRank";
import passed_leverable from "./passed_leverable";
import sum from "../global/sum";

export default function passed_block(pos, square) {
    if (square == null) return sum(pos, passed_block);
    if (!passed_leverable(pos, square)) return 0;
    if (getRank(pos, square) < 4) return 0;
    if (board(pos, square.x, square.y - 1) != "-") return 0;
    let r = getRank(pos, square) - 1;
    let w = r > 2 ? 5 * r - 13 : 0;
    let pos2 = colorflip(pos);
    let defended = 0, unsafe = 0, wunsafe = 0, defended1 = 0, unsafe1 = 0;
    for (let y = square.y - 1; y >= 0; y--) {
      if (attack(pos, {x:square.x,y:y})) defended++;
      if (attack(pos2, {x:square.x,y:7-y})) unsafe++;
      if (attack(pos2, {x:square.x-1,y:7-y})) wunsafe++;
      if (attack(pos2, {x:square.x+1,y:7-y})) wunsafe++;
      if (y == square.y - 1) {
        defended1 = defended;
        unsafe1 = unsafe;
      }
    }
    for (let y = square.y + 1; y < 8; y++) {
      if (board(pos, square.x, y) == "R"
       || board(pos, square.x, y) == "Q") defended1 = defended = square.y;
      if (board(pos, square.x, y) == "r"
       || board(pos, square.x, y) == "q") unsafe1 = unsafe = square.y;
    }
    let k = (unsafe == 0 && wunsafe == 0 ? 35 : unsafe == 0 ? 20 : unsafe1 == 0 ? 9 : 0)
          + (defended1 != 0 ? 5 : 0);
    return k * w;
  }