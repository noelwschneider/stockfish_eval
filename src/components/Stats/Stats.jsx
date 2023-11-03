import { useSelector } from "react-redux";

import { Grid, Typography } from '@mui/material';



export default function Stats() {
    const position = useSelector(store => store.position)

    return (
        <Grid container item xs={4}>
            <Grid item xs={12} style={{fontSize: "50px"}}>
                Eval: {position.evaluation}
            </Grid>
        </Grid>
    )
}