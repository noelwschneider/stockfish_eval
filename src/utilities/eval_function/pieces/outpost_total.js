import board from "../global/board";
import outpost from "./outpost";
import reachable_outpost from "./reachable_outpost";
import sum from "../global/sum";



export default function outpost_total(pos, square) {
    if (square === null) return sum(pos, outpost_total);
    if (board(pos, square.x, square.y) !== "N"
     && board(pos, square.x, square.y) !== "B") return 0;
    let knight = board(pos, square.x, square.y) === "N";
    let reachable = 0;
    if (!outpost(pos, square)) {
      if (!knight) return 0;
      reachable = reachable_outpost(pos, square);
      if (!reachable) return 0;
      return 1;
    }
    if (knight && (square.x < 2 || square.x > 5)) {
      let ea = 0, cnt = 0;
      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          if (
            (  
                (Math.abs(square.x - x) === 2 
                    && Math.abs(square.y - y) === 1)
                || (Math.abs(square.x - x) === 1 
                    && Math.abs(square.y - y) === 2)
            )

            && "nbrqk".indexOf(board(pos, x, y)) >= 0) 
        {
            ea = 1;
        }

          if (
            (
                (x < 4 && square.x < 4) 
                || (x >= 4 && square.x >= 4)
            )
            && "nbrqk".indexOf(board(pos, x, y)) >= 0) {
                cnt++
            };
        }
      }

      if (!ea && cnt <= 1) {
        return 2
        };
    }
    return knight ? 4 : 3;
  }