import { Grid } from '@mui/material';

import { useSelector } from "react-redux";

import getSquareColor from '../../utilities/getSquareColor';

export default function Square({piece, rankIndex, fileIndex}) {
    const position = useSelector(store => store.position);
    const { whiteToMove } = position;

    const squareColor = getSquareColor(whiteToMove, rankIndex, fileIndex)


    return (
        <Grid item xs={1} style={{backgroundColor: squareColor, display: "flex", alignItems: "center", justifyContent: "center"}}>
            <p>{piece}</p>
        </Grid>
    )
}