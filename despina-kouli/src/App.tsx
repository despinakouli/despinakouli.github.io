import './App.css'
import avatar from './assets/avatar.jpg'
import linkedin from './assets/linkedin.svg'
import linkedinHover from './assets/linkedin-hover.svg'
import github from './assets/github.svg'
import githubHover from './assets/github-hover.svg'

function App() {
  return (
    <>
      <header className="navbar">
        <div className="container">
          <nav>
            <a href="#" className="nav-link">Skills</a>
            <a href="#" className="nav-link">Projects</a>
            <a href="#" className="nav-link">Contact</a>
          </nav>
          <div className="logo">Despina Maria Koulisakis</div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/despina-maria-koulisakis/" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src={linkedin} alt="LinkedIn" className="social-icon" />
              <img src={linkedinHover} alt="LinkedIn" className="social-icon-hover" />
            </a>
            <a href="https://github.com/despinakouli" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src={github} alt="GitHub" className="social-icon" />
              <img src={githubHover} alt="GitHub" className="social-icon-hover" />
            </a>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="hero">
          <div className="text">
            <h1>Hi! I'm Despina! <span className="wave-emoji">👋</span></h1>            
            <h2>Recent Software Engineering Graduate</h2>
            <p>I’m a recent Software Engineering graduate from Concordia University with a passion for frontend development and UI/UX design. My projects and internship have equipped me with skills in:</p>
            <a className="btn" href="#">Resume</a>
          </div>
          <div className="avatar">
            <img src={avatar} alt="Avatar" />
          </div>
        </div>
      </main>
    </>
  )
}

export default App