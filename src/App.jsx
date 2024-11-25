// import logo from './logo.svg';
import logo from './figs/haguruma_gear4_yellow.png';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

// export default App;
export default function MyApp(){
  return(
    <div>
      
      <Header/>
      {/* <h1>Welcome!</h1> */}
      <App/>
      
    </div>
  );
}
