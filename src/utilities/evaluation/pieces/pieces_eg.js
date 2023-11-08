import bishop_pawns from "./bishop_pawns";
import bishop_xray_pawns from "./bishop_xray_pawns";
import board from "../global/board";
import king_protector from "./king_protector";
import minor_behind_pawn from "./minor_behind_pawn";
import outpost_total from "./outpost_total";
import queen_infiltration from "./queen_infiltration";
import rook_on_file from "./rook_on_file";
import rook_on_queen_file from "./rooks_on_queen_file";
import trapped_rook from "./trapped_rook";
import weak_queen from "./weak_queen";
import sum from "../global/sum";


export default function pieces_eg(pos, square) {
    if (!square) {
        return sum(pos, pieces_eg)
    };

    if ("NBRQ".indexOf(board(pos, square.x, square.y)) < 0) {
        return 0;
    }

    let value = 0;
    value += [0,22,36,23,36][outpost_total(pos, square)];
    value += 3 * minor_behind_pawn(pos, square);
    value -= 7 * bishop_pawns(pos, square);
    value -= 5 * bishop_xray_pawns(pos, square);
    value += 11 * rook_on_queen_file(pos, square);
    value += [0,7,29][rook_on_file(pos, square)];
    value -= trapped_rook(pos, square) * 13 * (pos.castleRights[0] || pos.castleRights[1] ? 1 : 2);
    value -= 15 * weak_queen(pos, square);
    value += 14 * queen_infiltration(pos, square);
    value -= 9 * king_protector(pos, square);
    return value;
  }