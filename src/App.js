import logo from './logo.svg';
import Button from '@mui/material/Button'; 
import './App.css';
import ButtonAppBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <header className="App-header">
        <Button variant="containded">Hola Mundo</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
