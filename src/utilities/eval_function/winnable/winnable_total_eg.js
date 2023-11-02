import winnable from "./winnable"



export default function winnable_total_eg(pos, v) {
    if (v == null) v = end_game_evaluation(pos, true);
    return (v > 0 ? 1 : v < 0 ? -1 : 0)
           * Math.max(winnable(pos), -Math.abs(v));
  }