import Square from "./Square"

import { Grid } from '@mui/material';


export default function Rank({ rank, rankIndex }) {
    return (
        <Grid container item xs={12} columns={8} style={{display: "flex", justifyContent: "center"}}>
            {rank.map( (piece, fileIndex) => (
                <Square key={fileIndex} piece={piece} rankIndex={rankIndex} fileIndex={fileIndex}/>
            ))}
        </Grid>
    )
}