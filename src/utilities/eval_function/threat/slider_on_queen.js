import attack from "../attack/attack";
import bishop_xray_attack from "../attack/bishop_xray_attack";
import board from "../global/board";
import colorflip from "../global/colorflip";
import mobility_area from "../mobility/mobility_area";
import queen_attack from "../attack/queen_attack";
import queen_attack_diagonal from "../attack/queen_attack_diagonal";
import queen_count from "../helpers/queen_count";
import rook_xray_attack from "../attack/rook_xray_attack";
import sum from "../global/sum";


export default function slider_on_queen(pos, square) {
    if (square === null) return sum(pos, slider_on_queen);
    let pos2 = colorflip(pos);
    if (queen_count(pos2) !== 1) return 0;
    if (board(pos, square.x, square.y) === "P") return 0;
    if (board(pos, square.x - 1, square.y - 1) === "p") return 0;
    if (board(pos, square.x + 1, square.y - 1) === "p") return 0;
    if (attack(pos, square) <= 1) return 0;
    if (!mobility_area(pos, square)) return 0;
    let diagonal = queen_attack_diagonal(pos2, {x:square.x, y:7-square.y});
    let v = queen_count(pos) === 0 ? 2 : 1;
    if (diagonal && bishop_xray_attack(pos, square)) return v;
    if (!diagonal
     && rook_xray_attack(pos, square)
     && queen_attack(pos2, {x:square.x, y:7-square.y})) return v;
    return 0;
  }