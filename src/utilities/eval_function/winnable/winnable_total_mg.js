import winnable from "./winnable";
import middle_game_evaluation from "../middle_game_evaluation";

export default function winnable_total_mg(pos, v) {
    if (v === null) v = middle_game_evaluation(pos, true);
    return (v > 0 ? 1 : v < 0 ? -1 : 0)
           * Math.max(Math.min(winnable(pos)+50, 0), -Math.abs(v));
  }