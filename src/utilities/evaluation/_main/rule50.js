export default function rule50(pos, square) {
    if (square !== null) return 0;
    return pos.moveCounters[0];
  }