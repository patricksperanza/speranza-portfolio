import "./Project.css"
import { HashLink as Link } from "react-router-hash-link"

const Project = ({ imgSrc, link }) => {
  return (
    <div className="project">
      <Link to={link}>
        <div className="project-container">
          <img src={imgSrc} alt="" />
        </div>
      </Link>
    </div>
  )
}

export default Project
