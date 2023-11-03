import bishop_xray_attack from "./bishop_xray_attack";
import king_attack from "./king_attack";
import knight_attack from "./knight_attack";
import pawn_attack from "./pawn_attack";
import queen_attack from "./queen_attack";
import rook_xray_attack from "./rook_xray_attack";
import sum from "../global/sum";



export default function attack(pos, square) {
    if (square === null) {
        return sum(pos, attack)
    };

    let value = 0;
    value += pawn_attack(pos, square);
    value += king_attack(pos, square);
    value += knight_attack(pos, square);
    value += bishop_xray_attack(pos, square);
    value += rook_xray_attack(pos, square);
    value += queen_attack(pos, square);
    
    return value;
  }