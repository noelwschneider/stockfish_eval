import board from "../global/board";
import pinned_direction from "./pinned_direction";
import sum from "../global/sum";


export default function queen_attack_diagonal(pos, square, s2) {
    if (!square) return sum(pos, queen_attack_diagonal);
    let v = 0;
    for (let i = 0; i < 8; i++) {
        let ix = (i + (i > 3)) % 3 - 1;
        let iy = (((i + (i > 3)) / 3) << 0) - 1;
        if (ix === 0 || iy === 0) continue;
        for (let d = 1; d < 8; d++) {
            let b = board(pos, square.x + d * ix, square.y + d * iy);
            if (b === "Q"
                && (!s2 || s2.x === square.x + d * ix && s2.y === square.y + d * iy)) {
                let dir = pinned_direction(pos, { x: square.x + d * ix, y: square.y + d * iy });
                if (dir === 0 || Math.abs(ix + iy * 3) === dir) v++;
            }
            if (b !== "-") break;
        }
    }
    return v;
}