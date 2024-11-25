
import React from "react";
import { BrowserRouter, Link} from "react-router-dom";
import { Router } from "./components/Router";

import { Home } from "./components/Home";
import { Research } from "./components/Research";
import { Portfolio } from "./components/Portfolio";
import logo from './figs/haguruma_gear4_yellow.png';
import "./Header.css"; // スタイル用ファイルをインポート

function Header_contents(){
  return (
    <header className="header_contents">
      <BrowserRouter>
      <nav className="nav">
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Research">Research</Link></li>
          <li><Link to="/Portfolio">Portfolio</Link></li>
        </ul>
      </nav>
      <Router />
      </BrowserRouter>
    </header>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="header-disp">
        <img src={logo} className="header-logo" alt="logo (gear)" />
        <div className="logo">
            <h1>my webpage</h1>
        </div>
        <img src={logo} className="header-logo" alt="logo (gear)" />
      </div>
      
      <Header_contents />
    </header>
  );
}

export default Header;