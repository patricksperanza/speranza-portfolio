import React from "react"
import "./Social.css"
import { RiFacebookFill, RiTwitterFill, RiLinkedinFill } from "react-icons/ri"

const Social = () => {
  return (
    <div className="social">
      <a href="https://www.facebook.com/patrick.speranza.5" target="_blank">
        <RiFacebookFill className="social-link" />
      </a>
      <a href="https://twitter.com/PatrickSperanza" target="_blank">
        <RiTwitterFill className="social-link" />
      </a>
      <a
        href="https://www.linkedin.com/in/patrick-speranza-893621273/"
        target="_blank"
      >
        <RiLinkedinFill className="social-link" />
      </a>
    </div>
  )
}

export default Social
