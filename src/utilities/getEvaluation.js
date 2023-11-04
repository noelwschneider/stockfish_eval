// Universal eval functions
import main_evaluation from '../../utilities/eval_function/main_evaluation';
import phase from '../../utilities/eval_function/phase';
import scale_factor from '../../utilities/eval_function/scale_factor';
import tempo from '../../utilities/eval_function/tempo';
import imbalance_total from '../../utilities/eval_function/imbalance/imbalance_total';
import space from '../../utilities/eval_function/winnable/winnable';
import colorflip from '../../utilities/eval_function/global/colorflip';

// Middlegame eval functions
import middle_game_evaluation from '../../utilities/eval_function/middle_game_evaluation';
import piece_value_mg from '../../utilities/eval_function/material/piece_value_mg';
import psqt_mg from '../../utilities/eval_function/material/psqt_mg';
import pawns_mg from '../../utilities/eval_function/pawns/pawns_mg';
import mobility_mg from '../../utilities/eval_function/mobility/mobility';
import threats_mg from '../../utilities/eval_function/threat/threats_mg';
import passed_mg from '../../utilities/eval_function/passed_pawns/passed_mg';
import king_mg from '../../utilities/eval_function/king/king_mg';
import winnable_total_mg from '../../utilities/eval_function/winnable/winnable_total_mg';

// Endgame eval functions
import end_game_evaluation from '../../utilities/eval_function/end_game_evaluation';
import king_eg from "../../utilities/eval_function/king/king_eg";
import mobility_eg from "../../utilities/eval_function/mobility/mobility_eg";
import passed_eg from "../../utilities/eval_function/passed_pawns/passed_eg";
import pawns_eg from "../../utilities/eval_function/pawns/pawns_eg";
import pieces_eg from "../../utilities/eval_function/pieces/pieces_eg";
import piece_value_eg from "../../utilities/eval_function/material/piece_value_eg";
import psqt_eg from "../../utilities/eval_function/material/psqt_eg";
import threats_eg from "../../utilities/eval_function/threat/threats_eg";
import winnable_total_eg from "../../utilities/eval_function/winnable/winnable_total_eg";
import pieces_mg from '../../utilities/eval_function/pieces/pieces_mg';


export default function getEvaluation(position) {
    const white = position;
    const black = colorflip(position);

    const positionStats = {
        evaluation: {
            main: main_evaluation(white),
            mg: middle_game_evaluation(white),
            eg: end_game_evaluation(white)
        },

        imbalance: imbalance_total(white),

        white: {
            phase: phase(white),
            scaleFactor: scale_factor(position, end_game_evaluation(white)),
            tempo: tempo(white),
            space: space(white),

            material: {
                mg: piece_value_mg(white),
                eg: piece_value_eg(white)
            },

            pieceSquareBonus: {
                mg: psqt_mg(white),
                eg: psqt_eg(white)
            },

            pawns: {
                passed: {
                    mg: passed_mg(white),
                    eg: passed_eg(white)
                },

                nonPassed: {
                    mg: pawns_mg(white),
                    eg: pawns_eg(white)
                },
            },

            pieces: {
                mg: pieces_mg(white),
                eg: pieces_eg(white)
            },

            mobility: {
                mg: mobility_mg(white),
                eg: mobility_eg(white)
            },

            threats: {
                mg: threats_mg(white),
                eg: threats_eg(white)
            },

            king: {
                mg: king_mg(white),
                eg: king_eg(white)
            },

            winnable: {
                mg: winnable_total_mg(white),
                eg: winnable_total_eg(white)
            }
        },

        black: {
            phase: phase(black),
            scaleFactor: scale_factor(position, end_game_evaluation(black)),
            tempo: tempo(black),
            space: space(black),

            material: {
                mg: piece_value_mg(black),
                eg: piece_value_eg(black)
            },

            pieceSquareBonus: {
                mg: psqt_mg(black),
                eg: psqt_eg(black)
            },

            pawns: {
                passed: {
                    mg: passed_mg(black),
                    eg: passed_eg(black)
                },

                nonPassed: {
                    mg: pawns_mg(black),
                    eg: pawns_eg(black)
                },
            },

            pieces: {
                mg: pieces_mg(black),
                eg: pieces_eg(black)
            },

            mobility: {
                mg: mobility_mg(black),
                eg: mobility_eg(black)
            },

            threats: {
                mg: threats_mg(black),
                eg: threats_eg(black)
            },

            king: {
                mg: king_mg(black),
                eg: king_eg(black)
            },

            winnable: {
                mg: winnable_total_mg(black),
                eg: winnable_total_eg(black)
            }
        }
    }

    return positionStats;
}