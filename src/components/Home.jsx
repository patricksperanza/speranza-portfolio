import "./Home.css"
import { useTypewriter, Cursor } from "react-simple-typewriter"

const Home = () => {
  const [text] = useTypewriter({
    words: ["Welcome!", "I'm Patrick Speranza"],
    loop: true,
  })

  return (
    <div id="home" className="home">
      <div className="home-text">
        <p className="home-text-primary">
          {text}
          <Cursor cursorColor={"rgb(94, 197, 154)"} />
        </p>
        <p className="home-text-tertiary">A web developer</p>
        <p className="home-text-tertiary">based in Northwest Indiana</p>

        <a href="#contact">
          <button class="home-text-btn">Hire Me</button>
        </a>
      </div>
    </div>
  )
}

export default Home
