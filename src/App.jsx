import './App.css';
import ButtonAppBar from './components/NavBar';
import Header from './components/Header';
import {ThemeProvider} from '@mui/material/styles';
import styles from './pallete/pallete'

const theme = styles;

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <ButtonAppBar />
      <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
