import { Grid } from '@mui/material';

import { useSelector } from "react-redux";
import { useRef } from 'react';

import getSquareColor from '../../utilities/getSquareColor';

export default function Square({piece, rankIndex, fileIndex}) {
    const position = useSelector(store => store.position);
    const { whiteToMove } = position;

    const squareColor = getSquareColor(whiteToMove, rankIndex, fileIndex)
    const length = 90;

    if (piece === "-") {
        piece = ""
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
            <p>{piece}</p>
        </Grid>
    )
}