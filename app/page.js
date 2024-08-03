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

  const projects = [
    {
      title: 'Study Time tracking App',
      description: 'An app to track and analyze study time for improved productivity',
      image: '/images/studyApp.png',
      github: 'https://github.com/your-username/studytracking',
      demo: 'https://study-tracking-app.vercel.app/',
    },
    {
      title: 'Movie App',
      description: 'A website that displays lists of movies sorted by rating and release date.',
      image: '/images/movie.png',
      github: 'https://github.com/Euna-kim-1/react-for-beginners',
      demo: 'https://euna-kim-1.github.io/react-for-beginners/',
    },
  ];

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
        <h1 className="title">Skills</h1>
        <div className="skills-container">
          <div className="skill">
            <h3>The Git&GitHub Bootcamp</h3>
            <p>Platform: Udemy</p>
            <p>Status: Complete</p>
            <div className="progress-bar done">
              <div className="progress" style={{ width: "100%" }}></div>
            </div>
          </div>
          <div className="skill">
            <h3>MySQL Bootcamp</h3>
            <p>Platform: Udemy</p>
            <p>Status: Done</p>
            <div className="progress-bar done">
              <div className="progress" style={{ width: "100%" }}></div>
            </div>
          </div>
          <div className="skill">
            <h3>Java</h3>
            <p>Platform: YouTube</p>
            <p>Status: On Hold</p>
            <div className="progress-bar on-hold">
              <div className="progress" style={{ width: "70%" }}></div>
            </div>
          </div>
          <div className="skill">
            <h3>Algorithm</h3>
            <p>Platform: Udemy</p>
            <p>Status: In Progress</p>
            <div className="progress-bar in-progress">
              <div className="progress" style={{ width: "50%" }}></div>
            </div>
          </div>
          <div className="skill">
            <h3>Web Bootcamp</h3>
            <p>Platform: Udemy</p>
            <p>Status: In Progress</p>
            <div className="progress-bar in-progress">
              <div className="progress" style={{ width: "40%" }}></div>
            </div>
          </div>
          <div className="skill">
            <h3>React</h3>
            <p>Platform: Udemy</p>
            <p>Status: In Progress</p>
            <div className="progress-bar in-progress">
              <div className="progress" style={{ width: "20%" }}></div>
            </div>
          </div>
          <div className="skill">
            <h3>React Native</h3>
            <p>Platform: Udemy</p>
            <p>Status: On Hold</p>
            <div className="progress-bar on-hold">
              <div className="progress" style={{ width: "10%" }}></div>
            </div>
          </div>
          <div className="skill">
            <h3>Java</h3>
            <p>Platform: Udemy</p>
            <p>Status: On Hold</p>
            <div className="progress-bar on-hold">
              <div className="progress" style={{ width: "10%" }}></div>
            </div>
          </div>
          <div className="skill">
            <h3>Node.js</h3>
            <p>Platform: Udemy</p>
            <p>Status: Not Started</p>
            <div className="progress-bar not-started">
              <div className="progress" style={{ width: "0%" }}></div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <p className="section_text_p3">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="projects-container color-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <Image src={project.image} alt={`${project.title} Image`} width={500} height={300} className="project-image" />
              <h2 className="project-title">{project.title}</h2>
              <p className="description">{project.description}</p>
              <div className="buttons-container">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-color-1">GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-color-2">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <p className="section_text_p3">Get In Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <Image
              src="/images/gmail.png"
              alt="Email Icon"
              className="contact-icon"
              width={50}
              height={50}
            />
            <p>
              <strong>Email:</strong> <a href="mailto:one39567220@gmail.com">one39567220@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <Image
              src="/images/linkedin.png"
              alt="LinkedIn Icon"
              className="contact-icon"
              width={50}
              height={50}
            />
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/jungwon-noah-park/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jungwon Park&apos;s Linkedin
              </a>
            </p>
          </div>
        </div>
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
