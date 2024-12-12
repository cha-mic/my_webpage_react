// import logo from './logo.svg';
import { BrowserRouter, Link} from "react-router-dom";
import { Router } from "./components/Router";

import logo from './figs/haguruma_gear4_yellow.png';
import './App.css';
import Header from './Header';
import Footer from './components/Footer';

function Switch_contents(){
  return (
    <div className="switch-contents">

      <BrowserRouter>
      <div className="switch-contents-disp">
        <div className="nav">
          <ul>
            <li><Link to="/my_webpage_react/">Home</Link></li>
            <li><Link to="/my_webpage_react/Research">Research</Link></li>
            <li><Link to="/my_webpage_react/Portfolio">Portfolio</Link></li>
            <li><Link to="/my_webpage_react/Contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <Router />
      </BrowserRouter>

    </div>
  );
}

// export default App;
export default function MyApp(){
  return(
    <div>
      <Header/>
      <div className="main-disp">
        <Switch_contents/>
      </div>
      <Footer/>
    </div>
  );
}
