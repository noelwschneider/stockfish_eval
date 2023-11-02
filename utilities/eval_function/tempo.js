export default function tempo(pos, square) {
    if (square != null) return 0;
    return 28 * (pos.w ? 1 : -1);
  }