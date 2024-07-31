"use client";

import React from "react";
import Image from "next/image";

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
            Hello, I&apos;m Jungwon Park. A meticulous and passionate Full-Stack
            Junior Developer based in Calgary, Canada.
          </p>
          <div className="btn-container">
            <button
              className="btn btn-color-1 custom-width"
              onClick={() => (window.location.href = "#contact")}
            >
              Contact Info
            </button>
          </div>
        </div>
        <div className="profile_image">
          <Image
            src="/images/Jungwon.jpg"
            alt="Profile Image"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section id="about">
        <p className="section_text_p3">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="about-containers">
          <div className="about-details-container">
            <div className="details-container">
              <h3>Current Studies</h3>
              <p>
                I am currently in my third semester at SAIT, studying software
                development. I&apos;m a student who&apos;s really interested in
                software development. I enjoy learning different programming
                languages and frameworks, and I love building efficient and
                scalable applications.
              </p>
            </div>
            <div className="details-container">
              <h3>Background</h3>
              <p>
                I&apos;ve always been curious about how things work, and that
                curiosity led me to the world of software development. I&apos;ve
                been learning technologies like JavaScript, React, and Node.js,
                and I&apos;m continuously striving to grow in this field.
              </p>
            </div>
            <div className="details-container">
              <h3>Interests</h3>
              <p>
                I&apos;m particularly interested in frontend development using
                React.
              </p>
            </div>
            <div className="details-container">
              <h3>Future Goals</h3>
              <p>
                I&apos;m excited to take on new challenges and contribute to
                projects that push the boundaries of what technology can do.
              </p>
            </div>
          </div>
        </div>
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
        <p>Copyright 2024 Jungwon Park. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
