import attack from "../attack/attack";
import board from "../global/board";
import colorflip from "../global/colorflip";
import sum from "../global/sum";



export default function pawn_push_threat(pos, square) {
    if (!square) return sum(pos, pawn_push_threat);
    if ("pnbrqk".indexOf(board(pos, square.x, square.y)) < 0) return 0;
    for (let ix = -1; ix <= 1; ix += 2) {
      if (board(pos, square.x + ix, square.y + 2) === "P"
       && board(pos, square.x + ix, square.y + 1) === "-"
       && board(pos, square.x + ix - 1, square.y) !== "p"
       && board(pos, square.x + ix + 1, square.y) !== "p"
       && (attack(pos, {x:square.x+ix,y:square.y+1})
           || !attack(colorflip(pos),{x:square.x+ix,y:6-square.y}))
       ) return 1;
  
      if (square.y === 3
       && board(pos, square.x + ix, square.y + 3) === "P"
       && board(pos, square.x + ix, square.y + 2) === "-"
       && board(pos, square.x + ix, square.y + 1) === "-"
       && board(pos, square.x + ix - 1, square.y) !== "p"
       && board(pos, square.x + ix + 1, square.y) !== "p"
       && (attack(pos, {x:square.x+ix,y:square.y+1})
           || !attack(colorflip(pos),{x:square.x+ix,y:6-square.y}))
       ) return 1;
    }
    return 0;
  }