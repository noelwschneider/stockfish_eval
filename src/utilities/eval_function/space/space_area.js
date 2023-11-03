import attack from "../attack/attack"
import board from "../global/board";
import colorflip from "../global/colorflip";
import sum from "../global/sum";
import getRank from "../helpers/getRank";
import getFile from "../helpers/getFile"

export default function space_area(pos, square) {
    if (square === null) {
        return sum(pos, space_area);
    };

    let squaresCounter = 0;
    let rank = getRank(pos, square);
    let file = getFile(pos, square);

    if ((rank >= 2 && rank <= 4 && file >= 3 && file <= 6)
     && (board(pos, square.x ,square.y) !== "P")
     && (board(pos, square.x - 1 ,square.y - 1) !== "p")
     && (board(pos, square.x + 1 ,square.y - 1) !== "p")) {
      squaresCounter++;
      if ((board(pos, square.x, square.y - 1) === "P"
        || board(pos, square.x, square.y - 2) === "P"
        || board(pos, square.x, square.y - 3) === "P")
        && !attack(colorflip(pos), {x:square.x, y:7-square.y})) squaresCounter++;
    }   
    return squaresCounter;
  }