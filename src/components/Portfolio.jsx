import './Portfolio.css'
import icon1 from '../figs/artifact_icon_3.png'

const PortfolioContents_1 = () => {
  return (
    <div className='portfolio-content'>
      <img src={icon1} alt="Floating Finger" />

    </div>
  )
}

const PortfolioList = () => {
  return (
    <div className='portfolio-list'>
      <p>柔軟膜を用いたフローティングフィンガー</p>
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