import './App.css';
import { AppBar, Toolbar, Typography } from '@mui/material';
import DirectionStack from './Components/DirectionStack'

function App() {
  return (
    <div>
      <AppBar position="relative" color="primary">
        <Toolbar>
          <Typography variant="h6">
            SelfDashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <DirectionStack>
      </DirectionStack>
    </div>
  );
}

export default App;
