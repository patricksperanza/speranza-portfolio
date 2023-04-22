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
      <RiLinkedinFill className="social-link" />
    </div>
  )
}

export default Social
