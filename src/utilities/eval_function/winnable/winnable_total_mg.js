import winnable from "./winnable";
import middle_game_evaluation from "../middle_game_evaluation";

export default function winnable_total_mg(pos, value) {
    if (value === null) {
        value = middle_game_evaluation(pos, true);
    }
    
    return (value > 0 ? 1 : value < 0 ? -1 : 0)
           * Math.max(Math.min(winnable(pos)+50, 0), -Math.abs(value));
  }