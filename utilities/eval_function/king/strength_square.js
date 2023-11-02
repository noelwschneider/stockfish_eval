import board from "../global/board";
import sum from "../global/sum";


function strength_square(pos, square) {
    if (square == null) return sum(pos, strength_square);
    var v = 5;
    var kx = Math.min(6, Math.max(1, square.x));
    var weakness =
        [[-6,81,93,58,39,18,25],
        [-43,61,35,-49,-29,-11,-63],
        [-10,75,23,-2,32,3,-45],
        [-39,-13,-29,-52,-48,-67,-166]];
    for (var x = kx - 1; x <= kx +1; x++) {
      var us = 0;
      for (var y = 7; y >= square.y; y--) {
        if (board(pos, x, y) == "p"
         && board(pos, x-1, y+1) != "P"
         && board(pos, x+1, y+1) != "P") us = y;
      }
      var f = Math.min(x, 7 - x);
      v += weakness[f][us] || 0;
    }
    return v;
  }