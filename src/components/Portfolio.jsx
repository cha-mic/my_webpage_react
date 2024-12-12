import './Portfolio.css';
import icon0 from '../figs/artifact_icon_0.png';
import icon1 from '../figs/artifact_icon_3.png';
import icon2 from '../figs/artifact_icon_1.png';


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
};

const PortfolioContents_2 = () => {
  return (
    <div className='portfolio-content'>
      <img src={icon2} alt="Quadroped" />
      <div className='portfolio-content-outer'>
        <div className='portfolio-content-inner'>
          <div className='portfolio-title'>
            製作時期
          </div>
          <div className='portfolio-ex'>
            2022年9月 - 2023年1月
          </div>          
        </div>
        <div className='portfolio-content-inner'>
          <div className='portfolio-title'>
            概要
          </div>
          <div className='portfolio-ex'>
            卒業論文に向けて製作．
            アクチュエータにマッキベン式空気圧人工筋肉を用いており， その配置は4脚動物の後脚を参考にしている．
            AMAM2023，ROBOMECH2023で発表．
          </div>          
        </div>
      </div>
    </div>
  )
};

const PortfolioContents_3 = () => {
  return (
    <div className='portfolio-content'>
      <img src={icon0} alt="dog" />
      <div className='portfolio-content-outer'>
        <div className='portfolio-content-inner'>
          <div className='portfolio-title'>
            製作時期
          </div>
          <div className='portfolio-ex'>
            2021年8月 - 2021年11月
          </div>          
        </div>
        <div className='portfolio-content-inner'>
          <div className='portfolio-title'>
            概要
          </div>
          <div className='portfolio-ex'>
          まちかね祭での展示用に製作．各脚2個，合計8個のエアシリンダを使用している． 
          脚軌道の生成にはスライダクランク機構を応用．
          初めはワニをイメージしていたが， 最終的にカエルのような形になった．
          </div>          
        </div>
      </div>
    </div>
  )
}

const PortfolioContents_4 = () => {
  return (
    <div className='portfolio-content'>
      <img src={icon0} alt="dog" />
      <div className='portfolio-content-outer'>
        <div className='portfolio-content-inner'>
          <div className='portfolio-title'>
            製作時期
          </div>
          <div className='portfolio-ex'>
            2020年8月 - 2020年12月
          </div>          
        </div>
        <div className='portfolio-content-inner'>
          <div className='portfolio-title'>
            概要
          </div>
          <div className='portfolio-ex'>
          自主研究奨励事業に応募し製作．
          Stanford大学がオープンソースで公開している4脚ロボット(Doggo)にメカナムホイールを取り付けた．
          <LinkButton Link={"https://hdl.handle.net/11094/80650"} />
          </div>          
        </div>
      </div>
    </div>
  )
}

const PortfolioList = () => {
  return (
    <div className='portfolio-list'>
      <p>柔軟膜を用いたフローティングフィンガー</p>
      <PortfolioContents_1 />
      <p>空気圧人工筋による疑似4脚ロボット</p>
      <PortfolioContents_2 />
      <p>エアシリンダによる4脚ロボット</p>
      <PortfolioContents_3 />
      <p>Stanford Doggo</p>
      <PortfolioContents_4 />
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