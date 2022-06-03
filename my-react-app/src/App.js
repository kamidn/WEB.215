  import logo from './logo.svg';
import Posts from "./components/Posts";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src="/koi_fish_md.jpg" />
          <img src="/maple_tree_md.jpg "/>
          <img src="/wind_chimes_md.jpg" />
        </div>
        <h1>My React App - Duy Nguyen</h1>

      </header>
      <Posts />
    </div>
  );
}

export default App;
