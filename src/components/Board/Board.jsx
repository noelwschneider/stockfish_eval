import {Grid} from '@mui/material';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import formatBoardToRender from "../../utilities/formatBoardToRender";

export default function Board() {
    const dispatch = useDispatch();

    const position = useSelector(store => store.position);
    const boardToRender = formatBoardToRender(position);
    
    return (
        <Grid container columns={8}>
            <Grid></Grid>
        </Grid>
    )
}