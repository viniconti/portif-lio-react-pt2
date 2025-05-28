import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">John Doe</div>
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
        <div className="logo">John Doe</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li>
              <a href="#about" onclick="toggleMenu()">
                About
              </a>
            </li>
            <li>
              <a href="#experience" onclick="toggleMenu()">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onclick="toggleMenu()">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onclick="toggleMenu()">
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
      <section id="profile">
        <div className="section__pic-container">
        <img src="/imagens/profile-pic.png.jpeg" alt="John Doe profile picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Olá, eu sou</p>
          <h1 className="title">Vinicius Conti</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onclick="window.open('./imagens/resume-example.pdf')"
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onclick="location.href='./#contact'"
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src="./imagens/linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
              onclick="location.href='https://www.linkedin.com/feed/'"
            />
            <img
              src="./imagens/github.png"
              alt="My Github profile"
              className="icon"
              onclick="location.href='https://github.com/dashboard'"
            />
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Conheça mais</p>
        <h1 className="title">Sobre mim</h1>
        <div className="section-container">
          <div className="section__pic-container"></div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src="./imagens/experience.png"
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experiencias</h3>
                <p>
                  1+ ano <br />
                  Frontend Development
                </p>
              </div>
              <div className="details-container">
                <img
                  src="./imagens/education.png"
                  alt="Education icon"
                  className="icon"
                />
                <h3>Educação</h3>
                <p>
                  Estudante do ensino médio
                  <br />
                  Extensão de curso em Software Development
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Sou estudante do ensino médio e apaixonado por tecnologia.
                Atualmente estou me aprofundando em desenvolvimento de software
                por meio de um curso de extensão, onde venho aprendendo desde
                lógica de programação até criação de aplicações web. Gosto de
                desafios, de resolver problemas e de estar sempre aprendendo
                algo novo. Estou construindo meu portfólio para compartilhar
                meus projetos e mostrar um pouco da minha jornada no mundo da
                programação.
              </p>
            </div>
          </div>
        </div>
        <img
          src="./imagens/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onclick="location.href='./#experience'"
        />
      </section>
      <section id="experience">
        <p className="section__text__p1">Explore minhas</p>
        <h1 className="title">Esperiências</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src="./imagens/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Intermediário</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./imagens/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Intermediário</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./imagens/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Básico</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./imagens/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Material UI</h3>
                    <p>Básico</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src="./imagens/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>PostgreSQL</h3>
                    <p>Básico</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./imagens/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Node JS</h3>
                    <p>Básico</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./imagens/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>React</h3>
                    <p>Intermediário</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./imagens/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediário</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./imagens/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onclick="location.href='./#projects'"
        />
      </section>
      <section id="projects">
        <p className="section__text__p1">Navege em meus recentes</p>
        <h1 className="title">Projetos</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="./imagens/project-1.png"
                  alt="Project 1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Primeiro projeto
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="./imagens/project-2.png"
                  alt="Project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Segundo projeto
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./imagens/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onclick="location.href='./#contact'"
        />
      </section>
      <section id="contact">
        <p className="section__text__p1">Entre em contato</p>
        <h1 className="title">Comigo</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src="./imagens/email.png"
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:examplemail@gmail.com">Viniciusconti444@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src="./imagens/linkedin.png"
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p>
              <a href="https://www.linkedin.com">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul calssName="nav-links">
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#experience">Espreriências</a>
              </li>
              <li>
                <a href="#projects">Projetos</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2025 Vinicius Conti. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
