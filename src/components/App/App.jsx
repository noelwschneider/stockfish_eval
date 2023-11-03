import './App.css';

import { Grid } from '@mui/material';

import Board from '../Board/Board';
import Stats from "../Stats/Stats";

function App() {
  return (
    <Grid container className="App" spacing={2} style={{margin: "20px"}}>
        <Board />
        <Stats />
    </Grid>
  );
}

export default App;
