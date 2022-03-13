import { Button } from '@mui/material';
import './App.css';
import BottomUp from './Component/BottomUp';
import MusicControllercomp from './Component/MusicControllercomp';
import TimeLinecomp from './Component/TimeLinecomp';

function App() {
  return (
    <div className="App">
        <Button>Primary</Button>
        <Button variant="contained">Contained</Button>
        <BottomUp />
        {/* <MusicControllercomp/>  */}
        <TimeLinecomp/>
   </div>
  );
}

export default App;
