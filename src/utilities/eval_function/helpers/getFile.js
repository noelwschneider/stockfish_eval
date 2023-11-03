import sum from "../global/sum";

export default function getFile(pos, square) {
    return square === null ? sum(pos, getFile) : 1 + square.x;
    
    /* ORIGINAL CODE FROM SOURCE
        if (square === null) return sum(pos, getFile);
        return 1 + square.x;
    */
}