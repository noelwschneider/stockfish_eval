import sum from "../global/sum"

export default function getRank(pos, square) {
    return square == null ? sum(pos, getRank) : 8 - square.y;

    /* ORIGINAL CODE FROM SOURCE
        if (square == null) return sum(pos, getRank);
        return 8 - square.y;
    */
}