import attack from "../attack/attack";
import board from "../global/board";
import sum from "../global/sum";


export default function flank_attack(pos, square) {
    if (!square) return sum(pos, flank_attack);
    if (square.y > 4) return 0;
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (board(pos, x, y) === "k") {
          if (x === 0 && square.x > 2) return 0;
          if (x < 3 && square.x > 3) return 0;
          if (x >= 3 && x < 5 && (square.x < 2 || square.x > 5)) return 0;
          if (x >= 5 && square.x < 4) return 0;
          if (x === 7 && square.x < 5) return 0;
        }
      }
    }
    let a = attack(pos, square);
    if (!a) return 0;
    return a > 1 ? 2 : 1;
  }