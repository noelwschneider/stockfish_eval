import { Grid } from '@mui/material';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import formatBoardToRender from "../../utilities/formatBoardToRender";

import Rank from "./Rank";

export default function Board() {

    const position = useSelector(store => store.position);
    const boardToRender = formatBoardToRender(position);

    return (
        <Grid container item xs={8}>
            {boardToRender.map((rank, rankIndex) => (
                <Rank key={rankIndex} rank={rank} rankIndex={rankIndex} />
            ))}
        </Grid>
    )
} 