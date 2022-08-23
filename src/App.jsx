import './App.css';
import ButtonAppBar from './components/NavBar';
import {ThemeProvider} from '@mui/material/styles';
import styles from './pallete/pallete'
import { CssBaseline } from '@mui/material';

const theme = styles;

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <ButtonAppBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
