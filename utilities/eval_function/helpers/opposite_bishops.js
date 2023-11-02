import board from "../global/board";
import bishop_count from "./bishop_count";
import colorflip from "../global/colorflip";

export default function opposite_bishops(pos) {
    if (bishop_count(pos) != 1) return 0;
    if (bishop_count(colorflip(pos)) != 1) return 0;
    var color = [0, 0];
    for (var x = 0; x < 8; x++) {
        for (var y = 0; y < 8; y++) {
            if (board(pos, x, y) == "B") color[0] = (x + y) % 2;
            if (board(pos, x, y) == "b") color[1] = (x + y) % 2;
        }
    }
    return color[0] == color[1] ? 0 : 1;
}