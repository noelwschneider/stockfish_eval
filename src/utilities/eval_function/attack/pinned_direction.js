import board from "../global/board";
import sum from "../global/sum";


export default function pinned_direction(pos, square) {
    if (!square) return sum(pos, pinned_direction);
    if ("PNBRQK".indexOf(board(pos, square.x, square.y).toUpperCase()) < 0) return 0;
    let color = 1;
    if ("PNBRQK".indexOf(board(pos, square.x, square.y)) < 0) color = -1;
    for (let i = 0; i < 8; i++) {
      let ix = (i + (i > 3)) % 3 - 1;
      let iy = (((i + (i > 3)) / 3) << 0) - 1;
      let king = false;
      for (let d = 1; d < 8; d++) {
        let b = board(pos, square.x + d * ix, square.y + d * iy);
        if (b === "K") king = true;
        if (b !== "-") break;
      }
      if (king) {
        for (let d = 1; d < 8; d++) {
          let b = board(pos, square.x - d * ix, square.y - d * iy);
          if (b === "q"
           || b === "b" && ix * iy !== 0
           || b === "r" && ix * iy === 0) return Math.abs(ix + iy * 3) * color;
          if (b !== "-") break;
        }
      }
    }
    return 0;
  }