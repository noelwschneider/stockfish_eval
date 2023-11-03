import king_attack from "../attack/king_attack";
import knight_attack from "../attack/knight_attack";
import sum from "../global/sum";


export default function knight_defender(pos, square) {
    if (!square) return sum(pos, knight_defender);
    if (knight_attack(pos, square) && king_attack(pos, square)) return 1;
    return 0;
  }