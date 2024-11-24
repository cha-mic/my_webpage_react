import logo from './logo.svg';
import './App.css';

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

function handleClick(){
  alert('you clicked me');
}

function MyButton(){
  // function handleClick(){
  //   alert('you clicked me');
  // }

  return (
    <button onClick={handleClick}>
      Click!
    </button>
  );
}

// export default App;
export default function MyApp(){
  return(
    <div>
      <h1>Welcome!</h1>
      <MyButton/>
      <App/>
    </div>
  );
}
