import board from "../global/board";
import pinned_direction from "./pinned_direction";
import sum from "../global/sum";


export default function rook_xray_attack(pos, square, s2) {
    if (square === null) return sum(pos, rook_xray_attack);
    let v = 0;
    for (let i = 0; i < 4; i++) {
        let ix = (i === 0 ? -1 : i === 1 ? 1 : 0);
        let iy = (i === 2 ? -1 : i === 3 ? 1 : 0);
        for (let d = 1; d < 8; d++) {
            let b = board(pos, square.x + d * ix, square.y + d * iy);
            if (b === "R"
                && (s2 === null || s2.x === square.x + d * ix && s2.y === square.y + d * iy)) {
                let dir = pinned_direction(pos, { x: square.x + d * ix, y: square.y + d * iy });
                if (dir === 0 || Math.abs(ix + iy * 3) === dir) v++;
            }
            if (b !== "-" && b !== "R" && b !== "Q" && b !== "q") break;
        }
    }

    return v;
}