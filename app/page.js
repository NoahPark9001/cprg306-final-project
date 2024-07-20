"use client";

import React from "react";

export default function Page() {
  const toggleMenu = () => {
    const menuLinks = document.querySelector(".menu-links");
    menuLinks.classList.toggle("open");
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    hamburgerIcon.classList.toggle("open");
  };

  return (
    <div>
      <nav id="desktop-nav">
        <div className="logo">Code by Jungwon Park</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <nav id="hamburger-nav">
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>

      <section id="profile">
        <div className="section_text">
          <p className="section_text_p2">Full-Stack Junior Developer</p>
          <p className="section_text_p1">
            Hello, I'm Jungwon Park. A meticulous and passionate Full-Stack
            Junior Developer based in Calgary, Canada.
          </p>
          <div className="btn-container">
            <button
              className="btn btn-color-1 custom-width"
              onClick={() => (window.location.href = "#contact")}
            >
              {" "}
              Contact Info{" "}
            </button>
          </div>
        </div>
      </section>

      <section id="about">
        <p className="section_text_p3">Get To Know More</p>
        <h1 className="title">About Me</h1>
      </section>

      <section id="experience">
        <p className="section_text_p3">Explore My</p>
        <h1 className="title">Experience</h1>
      </section>

      <section id="projects">
        <p className="section_text_p3">Browse My Recent</p>
        <h1 className="title">Projects</h1>
      </section>

      <section id="contact">
        <p className="section_text_p3">Get In Touch</p>
        <h1 className="title">Contact Me</h1>
      </section>

      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2024 Jugnwon Park. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
