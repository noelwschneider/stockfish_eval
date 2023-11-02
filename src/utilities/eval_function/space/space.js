import board from "../global/board";
import colorflip from "../global/colorflip";
import non_pawn_material from "../material/non_pawn_material";
import space_area from "./space_area";


export default function space(pos, square) {
    if (non_pawn_material(pos) + non_pawn_material(colorflip(pos)) < 12222) return 0;
    let pieceCount = 0, blockedCount = 0;
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if ("PNBRQK".indexOf(board(pos, x, y)) >= 0) pieceCount++;
        if (board(pos, x, y) == "P" && (board(pos, x, y - 1) == "p" || (board(pos, x - 1, y - 2) == "p" && board(pos, x + 1, y - 2) == "p"))) blockedCount++;
        if (board(pos, x, y) == "p" && (board(pos, x, y + 1) == "P" || (board(pos, x - 1, y + 2) == "P" && board(pos, x + 1, y + 2) == "P"))) blockedCount++;
      }
    }
    let weight = pieceCount - 3 + Math.min(blockedCount, 9);
    return ((space_area(pos, square) * weight * weight / 16) << 0);
  }