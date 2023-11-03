import {Grid} from '@mui/material';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Board() {
    const dispatch = useDispatch();

    const position = useSelector(store => store.position);
    console.log(position);
    
    return (
        <Grid container columns={8}>
            <Grid></Grid>
        </Grid>
    )
}