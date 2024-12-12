
import React from "react";

import logo from './figs/haguruma_gear4_yellow.png';
import "./Header.css"; // スタイル用ファイルをインポート

function Header() {
  return (
    <header className="header">
      <div className="header-disp">
        <img src={logo} className="header-logo" alt="logo (gear)" />
        <div className="logo">
            <h1>Michihisa Ohara</h1>
            Welcome to my webpage
        </div>
        <img src={logo} className="header-logo" alt="logo (gear)" />
      </div>
    </header>
  );
}

export default Header;