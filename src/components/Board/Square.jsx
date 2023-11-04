import { Grid } from '@mui/material';

import { useSelector } from "react-redux";

import P from "../../images/pieces/pawn_w.svg"
import p from "../../images/pieces/pawn_b.svg"
import N from "../../images/pieces/knight_w.svg"
import n from "../../images/pieces/knight_b.svg"
import B from "../../images/pieces/bishop_w.svg"
import b from "../../images/pieces/bishop_b.svg"
import R from "../../images/pieces/rook_w.svg"
import r from "../../images/pieces/rook_b.svg"
import K from "../../images/pieces/king_w.svg"
import k from "../../images/pieces/king_b.svg"
import Q from "../../images/pieces/queen_w.svg"
import q from "../../images/pieces/queen_b.svg"

import getSquareColor from '../../utilities/getSquareColor';


export default function Square({ piece, rankIndex, fileIndex }) {
    const pieces = {P, p, N, n, B, b, R, r, K, k, Q, q};

    const position = useSelector(store => store.position);
    const { whiteToMove } = position;

    const squareColor = getSquareColor(whiteToMove, rankIndex, fileIndex);
    const length = 90;

    if (piece === "-") {
        piece = ""
    } else {
        piece = pieces[piece];
    }

    return (
        <Grid item xs={1}
            style={{
                backgroundColor: squareColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: length,
                maxWidth: length,
            }}>
            <img src={piece} height={length}/>
        </Grid>
    )
}