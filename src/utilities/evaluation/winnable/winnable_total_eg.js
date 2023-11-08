import winnable from "./winnable"
import end_game_evaluation from "../end_game_evaluation";


export default function winnable_total_eg(pos, value) {
    if (!value) {
        value = end_game_evaluation(pos, true);
    }
    
    return (value > 0 ? 1 : value < 0 ? -1 : 0) * Math.max(winnable(pos), -Math.abs(value));
  }