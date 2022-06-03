//import logo from './logo.svg';
import { ReactComponent as Logo } from "./logo.svg";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo style={{ height: 200 }} />
        <h1>My React App - Duy Nguyen</h1>
      </header>
    </div>
  );
}

export default App;
