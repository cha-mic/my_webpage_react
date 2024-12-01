
import React from "react";

import logo from './figs/haguruma_gear4_yellow.png';
import "./Header.css"; // スタイル用ファイルをインポート

function Header() {
  return (
    <header className="header">
      <div className="header-disp">
        <img src={logo} className="header-logo" alt="logo (gear)" />
        <div className="logo">
            <h1>My Webpage</h1>
        </div>
        <img src={logo} className="header-logo" alt="logo (gear)" />
      </div>
    </header>
  );
}

export default Header;