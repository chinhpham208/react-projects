import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContaierRef = useRef(null)
  const linksRef = useRef(null)
useEffect(()=> {
  const linksHeight = linksRef.current.getBoundingClientRect().height
  console.log(linksHeight)
  if(showLinks){
    linksContaierRef.current.style.height= `${linksHeight}px`
  }else{
    linksContaierRef.current.style.height = '0px'
  }
},[showLinks])

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo" />
            <button
              className="nav-toggle"
              onClick={() => setShowLinks(!showLinks)}
            >
              <FaBars />
            </button>
          </div>
              {/* <div className={`${showLinks?"links-container show-container":'links-container'}`}> */}
              <div className="links-container" ref={linksContaierRef}>
              <ul className="links" ref={linksRef}>
                {links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <li key={id}>
                      <a href={url}>{text}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          <ul className="social-icons">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
