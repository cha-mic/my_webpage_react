import './Home.css';
import logo from '../figs/logo_intro_dummy.png'

function Introduction(){
    return(
        <div className='introduction'>
            <img src={logo} className="intro-logo" alt="dummy" />
            <div class="intro-item">
                ロボットが好きな大阪の大学院生.<br />
                現在の研究テーマは，近接覚センサを用いたばら積みピッキング．
                学部時代の研究テーマは，4脚ロボットのための柔軟な足先センサモジュール．
                ロボット製作団体では機構の設計・製作をしていました．<br />
            </div>

        </div>
    )
}

export const Home = () => {
    return (
      <div className='home'>
        <h1>Home</h1>
        <Introduction />
      </div>
    );
};
  
  