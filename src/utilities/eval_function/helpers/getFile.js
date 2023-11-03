import sum from "../global/sum";

export default function getFile(pos, square) {
    return !square ? sum(pos, getFile) : 1 + square.x;
    
    /* ORIGINAL CODE FROM SOURCE
        if (!square) return sum(pos, getFile);
        return 1 + square.x;
    */
}