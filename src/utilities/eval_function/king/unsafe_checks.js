import check from "./check";
import safe_check from "./safe_check";
import sum from "../global/sum";


export default function unsafe_checks(pos, square) {
    if (square === null) return sum(pos, unsafe_checks);
    if (check(pos, square, 0) && safe_check(pos, null, 0) === 0) return 1;
    if (check(pos, square, 1) && safe_check(pos, null, 1) === 0) return 1;
    if (check(pos, square, 2) && safe_check(pos, null, 2) === 0) return 1;
    return 0;
  }