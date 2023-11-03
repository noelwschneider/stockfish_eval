import passed_leverable from "./passed_leverable";
import sum from "../global/sum";
import getFile from "../helpers/getFile";

export default function passed_file(pos, square) {
    if (square === null) return sum(pos, passed_file);
    if (!passed_leverable(pos, square)) return 0;
    let file = getFile(pos, square);
    return Math.min(file - 1, 8 - file);
  }