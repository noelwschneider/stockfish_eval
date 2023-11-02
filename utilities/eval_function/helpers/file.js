import sum from "../global/sum";

export default function file(pos, square) {
    if (square == null) return sum(pos, file);
    return 1 + square.x;
}