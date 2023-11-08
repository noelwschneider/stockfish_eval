import board from "../global/board";
import mobility from "../mobility/mobility"
import rook_on_file from "./rook_on_file";
import sum from "../global/sum";


export default function trapped_rook(pos, square) {
    if (!square) return sum(pos, trapped_rook);
    if (board(pos, square.x, square.y) !== "R") return 0;
    if (rook_on_file(pos, square)) return 0;
    if (mobility(pos, square)> 3) return 0;
    let kx = 0
    let ky = 0;

    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (board(pos, x, y) === "K") { 
            kx = x; 
            ky = y; 
        }
      }
    }

    if ((kx < 4) !== (square.x < kx)) return 0;
    return 1;
  }