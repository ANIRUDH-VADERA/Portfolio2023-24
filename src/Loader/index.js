import React from 'react'
import "./index.css";

function Loader(props) {
  return (
    <div className="loader">
        <div className="about">
            <a className="bg_links social portfolio" href="https://leetcode.com/u/anirudh00711/" target="_blank" rel="noreferrer" aria-label="LeetCode">
                <span className="icon"></span>
            </a>
            <a className="bg_links social dribbble" href="https://github.com/ANIRUDH-VADERA" target="_blank" rel="noreferrer" aria-label="GitHub">
                <span className="icon"></span>
            </a>
            <a className="bg_links social linkedin" href="https://www.linkedin.com/in/anirudh-vadera-8836ba237/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <span className="icon"></span>
            </a>
            <span className="bg_links logo" aria-hidden="true"></span>
        </div>

        <div className="content">
            <div className="planet">
                <div className="ring"></div>
                    <div className="cover-ring"></div>
                <div className="spots">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>
            </div>
            <p className="AboutP">{props.msg}</p>
        </div>
    </div>
  )
}

export default Loader