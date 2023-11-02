import board from "../global/board";


export default function pawnless_flank(pos) {
    var pawns=[0,0,0,0,0,0,0,0], kx = 0;
    for (var x = 0; x < 8; x++) {
      for (var y = 0; y < 8; y++) {
        if (board(pos, x, y).toUpperCase() == "P") pawns[x]++;
        if (board(pos, x, y) == "k") kx = x;
      }
    }
    var sum;
    if (kx == 0) sum = pawns[0] + pawns[1] + pawns[2];
    else if (kx < 3) sum = pawns[0] + pawns[1] + pawns[2] + pawns[3];
    else if (kx < 5) sum = pawns[2] + pawns[3] + pawns[4] + pawns[5];
    else if (kx < 7) sum = pawns[4] + pawns[5] + pawns[6] + pawns[7];
    else  sum = pawns[5] + pawns[6] + pawns[7];
    return sum == 0 ? 1 : 0;
  }