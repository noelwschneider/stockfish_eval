import bishop_count from "./helpers/bishop_count"
import board from "./global/board";
import candidate_passed from "./passed_pawns/candidate_passed";
import colorflip from "./global/colorflip";
import end_game_evaluation from "./end_game_evaluation";
import knight_count from "./helpers/knight_count"
import non_pawn_material from "./material/non_pawn_material";
import opposite_bishops from "./helpers/opposite_bishops";
import pawn_count from "./helpers/pawn_count";
import piece_count from "./helpers/piece_count";
import queen_count from "./helpers/queen_count";



export default function scale_factor(pos, eg) {
    if (eg === null) {
        eg = end_game_evaluation(pos);
    }

    let pos2 = colorflip(pos);
    let pos_w = eg > 0 ? pos : pos2;
    let pos_b = eg > 0 ? pos2 : pos;
    let scaleFactor = 64;
    let pawnCountWhite = pawn_count(pos_w);
    let pawnCountBlack = pawn_count(pos_b);
    let queenCountWhite = queen_count(pos_w);
    let queenCountBlack = queen_count(pos_b);
    let bishopCountWhite = bishop_count(pos_w);
    let bishopCountBlack = bishop_count(pos_b);
    let knightCountWhite = knight_count(pos_w);
    let knightCountBlack = knight_count(pos_b);
    let nonPawnMaterialWhite = non_pawn_material(pos_w);
    let nonPawnMaterialBlack = non_pawn_material(pos_b);
    let bishopValueMg = 825;
    // let bishopValueEg = 915;
    let rookValueMg = 1276;

    if (pawnCountWhite === 0 && nonPawnMaterialWhite - nonPawnMaterialBlack <= bishopValueMg) {
        scaleFactor = nonPawnMaterialWhite < rookValueMg ? 0 : nonPawnMaterialBlack <= bishopValueMg ? 4 : 14
    };

    if (scaleFactor === 64) {
      let ob = opposite_bishops(pos);
      if (ob && nonPawnMaterialWhite === bishopValueMg && nonPawnMaterialBlack === bishopValueMg) {
        scaleFactor = 22 + 4 * candidate_passed(pos_w);
      } else if (ob) {
        scaleFactor = 22 + 3 * piece_count(pos_w);
      } else {
        if (nonPawnMaterialWhite === rookValueMg && nonPawnMaterialBlack === rookValueMg && pawnCountWhite - pawnCountBlack <= 1) {
          let pawnking_b = 0, pcw_flank = [0, 0];
          for (let x = 0; x < 8; x++) {
            for (let y = 0; y < 8; y++) {
              if (board(pos_w, x, y) === "P") pcw_flank[(x < 4)?1:0] = 1;
              if (board(pos_b, x, y) === "K") {
                for (let ix = -1; ix <= 1; ix++) {
                  for (let iy = -1; iy <= 1; iy++) {
                    if (board(pos_b, x + ix, y + iy) === "P") pawnking_b = 1;
                  }
                }
              }
            }
          }
          if (pcw_flank[0] !== pcw_flank[1] && pawnking_b) return 36;
        }
        if (queenCountWhite + queenCountBlack === 1) {
          scaleFactor = 37 + 3 * (queenCountWhite === 1 ? bishopCountBlack + knightCountBlack : bishopCountWhite + knightCountWhite);
        } else {
          scaleFactor = Math.min(scaleFactor, 36 + 7 * pawnCountWhite);
        }
      }
    }
    return scaleFactor;
  }