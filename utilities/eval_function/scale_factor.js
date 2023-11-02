import bishop_count from "./helpers/bishop_count"
import board from "./global/board";
import candidate_passed from "./passed_pawns/candidate_passed";
import colorflip from "./global/colorflip";
import end_game_evaluation from "./eng_game_evaluation";
import knight_count from "./helpers/knight_count"
import non_pawn_material from "./material/non_pawn_material";
import opposite_bishops from "./helpers/opposite_bishops";
import pawn_count from "./helpers/pawn_count";
import piece_count from "./helpers/piece_count";
import queen_count from "./helpers/queen_count";



export default function scale_factor(pos, eg) {
    if (eg == null) eg = end_game_evaluation(pos);
    var pos2 = colorflip(pos);
    var pos_w = eg > 0 ? pos : pos2;
    var pos_b = eg > 0 ? pos2 : pos;
    var sf = 64;
    var pc_w = pawn_count(pos_w), pc_b = pawn_count(pos_b);
    var qc_w = queen_count(pos_w), qc_b = queen_count(pos_b);
    var bc_w = bishop_count(pos_w), bc_b = bishop_count(pos_b);
    var nc_w = knight_count(pos_w), nc_b = knight_count(pos_b);
    var npm_w = non_pawn_material(pos_w), npm_b = non_pawn_material(pos_b);
    var bishopValueMg = 825, bishopValueEg = 915, rookValueMg = 1276;
    if (pc_w == 0 && npm_w - npm_b <= bishopValueMg) sf = npm_w < rookValueMg ? 0 : npm_b <= bishopValueMg ? 4 : 14;
    if (sf == 64) {
      var ob = opposite_bishops(pos);
      if (ob && npm_w == bishopValueMg && npm_b == bishopValueMg) {
        sf = 22 + 4 * candidate_passed(pos_w);
      } else if (ob) {
        sf = 22 + 3 * piece_count(pos_w);
      } else {
        if (npm_w == rookValueMg && npm_b == rookValueMg && pc_w - pc_b <= 1) {
          var pawnking_b = 0, pcw_flank = [0, 0];
          for (var x = 0; x < 8; x++) {
            for (var y = 0; y < 8; y++) {
              if (board(pos_w, x, y) == "P") pcw_flank[(x < 4)?1:0] = 1;
              if (board(pos_b, x, y) == "K") {
                for (var ix = -1; ix <= 1; ix++) {
                  for (var iy = -1; iy <= 1; iy++) {
                    if (board(pos_b, x + ix, y + iy) == "P") pawnking_b = 1;
                  }
                }
              }
            }
          }
          if (pcw_flank[0] != pcw_flank[1] && pawnking_b) return 36;
        }
        if (qc_w + qc_b == 1) {
          sf = 37 + 3 * (qc_w == 1 ? bc_b + nc_b : bc_w + nc_w);
        } else {
          sf = Math.min(sf, 36 + 7 * pc_w);
        }
      }
    }
    return sf;
  }