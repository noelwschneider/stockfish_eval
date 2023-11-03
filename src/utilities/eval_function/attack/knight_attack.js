import board from "../global/board";
import pinned from "./pinned";
import sum from "../global/sum";


export default function knight_attack(pos, square, s2) {
    if (!square) {
        return sum(pos, knight_attack);
    };

    let value = 0;

    for (let i = 0; i < 8; i++) {
      let ix = ((i > 3) + 1) * (((i % 4) > 1) * 2 - 1);
      let iy = (2 - (i > 3)) * ((i % 2 === 0) * 2 - 1);
      let b = board(pos, square.x + ix, square.y + iy);
      if (b === "N"
      && (!s2 || s2.x === square.x + ix && s2.y === square.y + iy)
      && !pinned(pos, {x:square.x + ix, y:square.y + iy})) value++;
    }
    return value;
  }