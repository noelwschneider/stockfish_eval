import sum from "../global/sum"

export default function rank(pos, square) {
    if (square == null) return sum(pos, rank);
    return 8 - square.y;
}