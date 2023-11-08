import { useState } from "react";
import { useSelector } from "react-redux";

import {
    Typography,
    ToggleButtonGroup,
    ToggleButton,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@mui/material';


export default function Stats() {
    const position = useSelector(store => store.position);
    const { evaluation } = position;
    const {
        value,
        phase,
        tempo,
        imbalance,
        scaleFactor,
        whiteStats,
        blackStats
    } = evaluation;

    const [phaseToggle, setPhaseToggle] = useState('middleGame');

    const handleChange = (event, newPhase) => {
        setPhaseToggle(newPhase)
    }


    return (
            <TableContainer>
                <Typography variant="h5">Evaluation</Typography>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Main</TableCell>
                            <TableCell>{value.main}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Middlegame</TableCell>
                            <TableCell>{value.mg}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Endgame</TableCell>
                            <TableCell>{value.eg}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Tempo</TableCell>
                            <TableCell>{tempo}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Typography variant="h5">Breakdown</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>White</TableCell>
                            <TableCell>Net</TableCell>
                            <TableCell>Black</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Material</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Piece Square Bonus</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Endgame</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Tempo</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
    )
}