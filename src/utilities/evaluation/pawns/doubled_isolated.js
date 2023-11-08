import board from "../global/board";
import isolated from "./isolated";
import sum from "../global/sum";


export default function doubled_isolated(pos, square) {
    if (!square) return sum(pos, doubled_isolated);
    if (board(pos, square.x, square.y) !== "P") return 0;
    if (isolated(pos, square)) {
      let obe=0,eop=0,ene=0;
      for (let y = 0; y < 8; y++) {
        if (y > square.y && board(pos, square.x, y) === "P") obe++;
        if (y < square.y && board(pos, square.x, y) === "p") eop++;
        if (board(pos, square.x - 1, y) === "p"
         || board(pos, square.x + 1, y) === "p") ene++;
      }
      if (obe > 0 && ene === 0 && eop > 0) return 1;
    }
    return 0;
  
  }