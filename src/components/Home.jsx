import './Home.css';
import Profile from './Profile'

import logo from '../figs/logo_intro_dummy.png'

function Introduction(){
    return(
        <div className='introduction'>
            <img src={logo} className="intro-logo" alt="dummy" />
            <div class="intro-item">
                ロボットが好きな関西在住の新米エンジニア.<br />
                大学院での研究テーマは，柔軟機構と近接覚センサを用いたばら積みピッキング．<br />
                学部時代の研究テーマは，4脚ロボットのための柔軟な足先センサモジュール．<br />
                ロボット製作団体では機構の設計・製作をしていました．<br />
            </div>
        </div>
    )
}

export const Home = () => {
    return (
      <div className='home'>
        <div className='home-disp'>
            <h1>About me</h1>
            <Introduction />
            <Profile />            
        </div>
      </div>
    );
};
  
  