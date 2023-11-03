import board from "../global/board";
import sum from "../global/sum";
import supported from "../pawns/supported";


export default function candidate_passed(pos, square) {
    if (!square) return sum(pos, candidate_passed);
    if (board(pos, square.x, square.y) !== "P") return 0;
    let ty1 = 8, ty2 = 8, oy = 8;
    for (let y = square.y - 1; y >= 0; y--) {
      if (board(pos, square.x    , y) === "P") return 0;
      if (board(pos, square.x    , y) === "p") ty1 = y;
      if (board(pos, square.x - 1, y) === "p"
       || board(pos, square.x + 1, y) === "p") ty2 = y;
    }
    if (ty1 === 8 && ty2 >= square.y - 1) return 1;
    if (ty2 < square.y - 2 || ty1 < square.y - 1) return 0;
    if (ty2 >= square.y && ty1 === square.y - 1 && square.y < 4) {
      if (board(pos, square.x - 1, square.y + 1) === "P"
       && board(pos, square.x - 1, square.y    ) !== "p"
       && board(pos, square.x - 2, square.y - 1) !== "p") return 1;
      if (board(pos, square.x + 1, square.y + 1) === "P"
       && board(pos, square.x + 1, square.y    ) !== "p"
       && board(pos, square.x + 2, square.y - 1) !== "p") return 1;
    }
    if (board(pos, square.x, square.y - 1) === "p") return 0;
    let lever = (board(pos, square.x - 1, square.y - 1) === "p" ? 1 : 0)
               + (board(pos, square.x + 1, square.y - 1) === "p" ? 1 : 0);
    let leverpush = (board(pos, square.x - 1, square.y - 2) === "p" ? 1 : 0)
                  + (board(pos, square.x + 1, square.y - 2) === "p" ? 1 : 0);
    let phalanx = (board(pos, square.x - 1, square.y) === "P" ? 1 : 0)
                + (board(pos, square.x + 1, square.y) === "P" ? 1 : 0);
    if (lever - supported(pos, square) > 1) return 0;
    if (leverpush - phalanx  > 0) return 0;
    if (lever > 0 && leverpush > 0) return 0;
    return 1;
  }