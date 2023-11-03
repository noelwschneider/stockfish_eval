import board from "../global/board";
import sum from "../global/sum";


export default function storm_square(pos, square, eg) {
    if (square === null) return sum(pos, storm_square);
    let v = 0, ev = 5;
    let kx = Math.min(6, Math.max(1, square.x));
    let unblockedstorm = [
      [85,-289,-166,97,50,45,50],
      [46,-25,122,45,37,-10,20],
      [-6,51,168,34,-2,-22,-14],
      [-15,-11,101,4,11,-15,-29]];
    let blockedstorm = [
      [0,0,76,-10,-7,-4,-1],
      [0,0,78,15,10,6,2]];
    for (let x = kx - 1; x <= kx +1; x++) {
      let us = 0, them = 0;
      for (let y = 7; y >= square.y; y--) {
        if (board(pos, x, y) === "p"
         && board(pos, x-1, y+1) !== "P"
         && board(pos, x+1, y+1) !== "P") us = y;
        if (board(pos, x, y) === "P") them = y;
      }
      let f = Math.min(x, 7 - x);
      if (us > 0 && them === us + 1) {
        v += blockedstorm[0][them];
        ev += blockedstorm[1][them];
      }
      else v += unblockedstorm[f][them];
    }
    return eg ? ev : v;
  }