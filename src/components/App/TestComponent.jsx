import makePositionFromFEN from '../../utilities/fenToPosition';
import main_evaluation from "../../utilities/eval_function/main_evaluation";

export default function TestComponent() {

    const startingPosition = makePositionFromFEN("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
    console.log(startingPosition);
    
    let evaluation = main_evaluation(startingPosition);
    console.log(evaluation);

    return (<div>

    </div>);
}