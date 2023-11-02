import attack from "../attack/attack";
import board from "../global/board";
import candidate_passed from "./candidate_passed";
import colorflip from "../global/colorflip";
import sum from "../global/sum";

export default function passed_leverable(pos, square) {
    if (square == null) return sum(pos, passed_leverable);
    if (!candidate_passed(pos, square)) return 0;
    if (board(pos, square.x, square.y - 1) != "p") return 1;
    let pos2 = colorflip(pos);
    for (let i = -1; i <=1; i+=2) {
      let s1 = {x:square.x + i, y:square.y};
      let s2 = {x:square.x + i, y:7-square.y};
      if (board(pos, square.x + i, square.y + 1) == "P"
       && "pnbrqk".indexOf(board(pos, square.x + i, square.y)) < 0
       && (attack(pos, s1) > 0 || attack(pos2, s2) <= 1)
      ) return 1;
    }
    return 0;
  }