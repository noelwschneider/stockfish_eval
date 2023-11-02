import bishop_pair from "./bishop_pair";
import colorflip from "../global/colorflip";
import imbalance from "./imbalance";


export default function imbalance_total(pos, square) {
    let v = 0;
    v += imbalance(pos) - imbalance(colorflip(pos));
    v += bishop_pair(pos) - bishop_pair(colorflip(pos));
    return (v / 16) << 0;
  }