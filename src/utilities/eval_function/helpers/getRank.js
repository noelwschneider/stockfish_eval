import sum from "../global/sum"

export default function getRank(pos, square) {
    return !square ? sum(pos, getRank) : 8 - square.y;

    /* ORIGINAL CODE FROM SOURCE
        if (!square) return sum(pos, getRank);
        return 8 - square.y;
    */
}