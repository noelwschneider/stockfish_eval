import board from "../global/board";
import sum from "../global/sum";


export default function imbalance(pos, square) {
    if (square == null) return sum(pos, imbalance);
    let qo = [[0], [40, 38], [32, 255, -62], [0, 104, 4, 0], [-26, -2, 47, 105, -208], [-189, 24, 117, 133, -134, -6]];
    let qt = [[0], [36, 0], [9, 63, 0], [59, 65, 42, 0], [46, 39, 24, -24, 0], [97, 100, -42, 137, 268, 0]];
    let j = "XPNBRQxpnbrq".indexOf(board(pos, square.x, square.y));
    if (j < 0 || j > 5) return 0;
    let bishop = [0, 0], v = 0;
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            let i = "XPNBRQxpnbrq".indexOf(board(pos, x, y));
            if (i < 0) continue;
            if (i == 9) bishop[0]++;
            if (i == 3) bishop[1]++;
            if (i % 6 > j) continue;
            if (i > 5) v += qt[j][i - 6];
            else v += qo[j][i];
        }
    }
    if (bishop[0] > 1) v += qt[j][0];
    if (bishop[1] > 1) v += qo[j][0];
    return v;
}