import attack from "../attack/attack";
import colorflip from "../global/colorflip";
import king_attack from "../attack/king_attack";
import queen_attack from "../attack/queen_attack";
import sum from "../global/sum";


export default function weak_squares(pos, square) {
    if (!square) {
        return sum(pos, weak_squares)
    };
    
    if (attack(pos, square)) {
      let pos2 = colorflip(pos);
      let attackCount = attack(pos2, {x:square.x,y:7-square.y});
      if (attackCount >= 2) return 0;
      if (attackCount === 0) return 1;
      if (king_attack(pos2, {x:square.x,y:7-square.y})
       || queen_attack(pos2, {x:square.x,y:7-square.y})) return 1;
    }
    return 0;
  }