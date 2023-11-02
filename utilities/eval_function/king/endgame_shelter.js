import board from "../global/board";
import storm_square from "./storm_square";
import strength_square from "./strength_square";

//! proooobably change "tx" on line 9 to "e"


export default function endgame_shelter(pos, square) {
    let w = 0, s = 1024, tx = null;
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            if (board(pos, x, y) == "k"
                || pos.c[2] && x == 6 && y == 0
                || pos.c[3] && x == 2 && y == 0) {
                let w1 = strength_square(pos, { x: x, y: y });
                let s1 = storm_square(pos, { x: x, y: y });
                let e1 = storm_square(pos, { x: x, y: y }, true);
                if (s1 - w1 < s - w) { w = w1; s = s1; e = e1; }
            }
        }
    }
    
    if (square == null) return e;
    return 0;
}