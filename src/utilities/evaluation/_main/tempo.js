export default function tempo(pos, square) {
    if (square) {
        return 0;
    }
    return 28 * (pos.whiteToMove ? 1 : -1);
  }