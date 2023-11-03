import bishop_on_king_ring from "./bishop_on_king_ring";
import bishop_pawns from "./bishop_pawns";
import bishop_xray_pawns from "./bishop_xray_pawns";
import board from "../global/board";
import king_protector from "./king_protector";
import long_diagonal_bishop from "./long_diagonal_bishop";
import minor_behind_pawn from "./minor_behind_pawn";
import outpost_total from "./outpost_total";
import rook_on_file from "./rook_on_file";
import rook_on_king_ring from "./rook_on_king_ring";
import rook_on_queen_file from "./rooks_on_queen_file";
import sum from "../global/sum";
import trapped_rook from "./trapped_rook";
import weak_queen from "./weak_queen";
import queen_infiltration from "./queen_infiltration";


export default function pieces_mg(pos, square) {
    if (square === null) return sum(pos, pieces_mg);
    if ("NBRQ".indexOf(board(pos, square.x, square.y)) < 0) return 0;
    let v = 0;
    v += [0,31,-7,30,56][outpost_total(pos, square)];
    v += 18 * minor_behind_pawn(pos, square);
    v -= 3 * bishop_pawns(pos, square);
    v -= 4 * bishop_xray_pawns(pos, square);
    v += 6 * rook_on_queen_file(pos, square);
    v += 16 * rook_on_king_ring(pos, square);
    v += 24 * bishop_on_king_ring(pos, square);
    v += [0,19,48][rook_on_file(pos, square)];
    v -= trapped_rook(pos, square) * 55 * (pos.castleRights[0] || pos.castleRights[1] ? 1 : 2);
    v -= 56 * weak_queen(pos, square);
    v -= 2 * queen_infiltration(pos, square);
    v -= (board(pos, square.x, square.y) === "N" ? 8 : 6) * king_protector(pos, square);
    v += 45 * long_diagonal_bishop(pos, square);
    return v;
  }