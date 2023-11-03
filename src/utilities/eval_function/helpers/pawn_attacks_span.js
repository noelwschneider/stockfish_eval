import backward from "../pawns/backward";
import board from "../global/board";
import colorflip from "../global/colorflip";
import sum from "../global/sum";


export default function pawn_attacks_span(pos, square) {
    if (!square) return sum(pos, pawn_attacks_span);
    let pos2 = colorflip(pos);
    for (let y = 0; y < square.y; y++) {
      if (board(pos, square.x - 1, y) === "p"
       && (y === square.y - 1
       || (board(pos, square.x - 1, y + 1) !== "P" 
       && !backward(pos2,{x:square.x-1,y:7-y})))) return 1;
      if (board(pos, square.x + 1, y) === "p"
       && (y === square.y - 1
       || (board(pos, square.x + 1, y + 1) !== "P"
        && !backward(pos2,{x:square.x+1,y:7-y})))) return 1;
    }
    return 0;
  }