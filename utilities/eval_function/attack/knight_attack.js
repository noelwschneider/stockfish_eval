import board from "../global/board";
import pinned from "./pinned";
import sum from "../global/sum";


export default function knight_attack(pos, square, s2) {
    if (square == null) return sum(pos, knight_attack);
    var v = 0;
    for (var i = 0; i < 8; i++) {
      var ix = ((i > 3) + 1) * (((i % 4) > 1) * 2 - 1);
      var iy = (2 - (i > 3)) * ((i % 2 == 0) * 2 - 1);
      var b = board(pos, square.x + ix, square.y + iy);
      if (b == "N"
      && (s2 == null || s2.x == square.x + ix && s2.y == square.y + iy)
      && !pinned(pos, {x:square.x + ix, y:square.y + iy})) v++;
    }
    return v;
  }