import board from "../global/board";
import mobility from "./mobility";
import sum from "../global/sum";


export default function mobility_bonus(pos, square, mg) {
    if (square === null) return sum(pos, mobility_bonus, mg);
    let bonus = mg ? [
      [-62,-53,-12,-4,3,13,22,28,33],
      [-48,-20,16,26,38,51,55,63,63,68,81,81,91,98],
      [-60,-20,2,3,3,11,22,31,40,40,41,48,57,57,62],
      [-30,-12,-8,-9,20,23,23,35,38,53,64,65,65,66,67,67,72,72,77,79,93,108,108,108,110,114,114,116]
    ] : [
      [-81,-56,-31,-16,5,11,17,20,25],
      [-59,-23,-3,13,24,42,54,57,65,73,78,86,88,97],
      [-78,-17,23,39,70,99,103,121,134,139,158,164,168,169,172],
      [-48,-30,-7,19,40,55,59,75,78,96,96,100,121,127,131,133,136,141,147,150,151,168,168,171,182,182,192,219]
    ];
    let i = "NBRQ".indexOf(board(pos, square.x, square.y));
    if (i < 0) return 0;
    return bonus[i][mobility(pos, square)];
  }