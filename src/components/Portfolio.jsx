import "./Portfolio.css"
import Project from "./Project"
import piano from "../assets/piano.svg"
import flashcards from "../assets/flashcards.svg"
import recorder from "../assets/recorder.svg"
import game from "../assets/game.svg"

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <header className="portfolio-header">
        <h2 className="portfolio-header-text">MY PROJECTS</h2>
        <div className="portfolio-header-line"></div>
      </header>
      <main className="portfolio-main">
        <Project imgSrc={flashcards} link="/flashcards/#portfolio" />
        <Project imgSrc={recorder} link="/recorder/#portfolio" />
        <Project imgSrc={piano} link="/piano/#portfolio" />
        <Project imgSrc={game} link="/game/#portfolio" />
      </main>
    </div>
  )
}

export default Portfolio
