import './Portfolio.css'
import icon1 from '../figs/artifact_icon_3.png'

import { LinkButton } from "./Linkbutton";

const PortfolioContents_1 = () => {
  return (
    <div className='portfolio-content'>
      <img src={icon1} alt="Floating Finger" />
      <div className='portfolio-content-outer'>
        <div className='portfolio-content-inner'>
          <div className='portfolio-title'>
            製作時期
          </div>
          <div className='portfolio-ex'>
            2023年5月-
          </div>          
        </div>
        <div className='portfolio-content-inner'>
          <div className='portfolio-title'>
            概要
          </div>
          <div className='portfolio-ex'>
            近接覚センサを用いたビジョンセンサレスばら積みピッキングを実現するための機構．
            部品データと組み立て方法をgithub上で公開している．
            SI2023で発表．
            <LinkButton Link = {"https://github.com/Osaka-University-Harada-Laboratory/RubberSheet_Floating_Finger"} />
          </div>          
        </div>
      </div>
      {/* <img src={icon1} alt="Floating Finger" /> */}
    </div>
  )
}

const PortfolioList = () => {
  return (
    <div className='portfolio-list'>
      <p>柔軟膜を用いたフローティングフィンガー</p>
      <PortfolioContents_1 />
      <p>空気圧人工筋による疑似4脚ロボット</p>
      <PortfolioContents_1 />
      <p>エアシリンダによる4脚ロボット</p>
      <PortfolioContents_1 />
      <p>Stanford Doggo</p>
      <PortfolioContents_1 />
    </div>
  )
}

export const Portfolio = () => {
    return (
      <div className="portfolio">
        <div className='portfolio-disp'>
        <h1>Portfolio</h1>
        <PortfolioList />
        </div>
      </div>
    );
};