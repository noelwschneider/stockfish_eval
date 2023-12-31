import board from "../global/board";
import storm_square from "./storm_square";
import strength_square from "./strength_square";

export default function shelter_storm(pos, square) {
    let w = 0, s = 1024, tx = null;
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (board(pos, x, y) === "k"
         || pos.castleRights[2] && x === 6 && y === 0
         || pos.castleRights[3] && x === 2 && y === 0) {
          let w1 = strength_square(pos, {x:x,y:y});
          let s1 = storm_square(pos, {x:x,y:y});
          if (s1 - w1 < s - w) { w = w1; s = s1; tx=Math.max(1,Math.min(6,x)); }
        }
      }
    }
    if (!square) return s;
    if (tx !== null && board(pos, square.x, square.y).toUpperCase() === "P" && square.x >= tx-1 && square.x <= tx+1) {
      for (let y = square.y-1; y >= 0; y--) if (board(pos, square.x, y) === board(pos, square.x, square.y)) return 0;
      return 1;
    }
    return 0;
  }