export default function tempo(pos, square) {
    if (square != null) return 0;
    return 28 * (pos.whiteToMove ? 1 : -1);
  }