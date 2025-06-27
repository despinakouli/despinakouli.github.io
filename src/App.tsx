import './App.css'
import { useState } from 'react'
import avatar from './assets/avatar.jpg'
import medcaConnectImage from './assets/MedcaConnect.png'
import softCondoImage from './assets/SoftCondo.png'
import careConnectImage from './assets/CareConnect.png'
//
function App() {
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0)
  
  const projects = [
    {
      id: 1,
      title: "MedcaConnect",
      description: "• Support platform matching people facing illness, mental health issues, or addiction\n• AI-guided virtual meetings\n• Lead Frontend Developer\n• Built with React Native, Node.js, MongoDB",
      image: medcaConnectImage,
      link: "https://drive.google.com/file/d/1j6qjKCdn8W5uA3vf3byvlKSDd5QMM2I8/view"
    },
    {
      id: 2,
      title: "SoftCondo", 
      description: "• Condo management platform\n• Lead Frontend Developer\n• Built with React, Node.JS, ASP.NET Core",
      image: softCondoImage,
      link: "https://youtu.be/NPRbtnI87q8?si=lJDLryHQwRRRfeaF"
    },
    {
      id: 3,
      title: "CareConnect",
      description: "• UI/UX Case Study for elderly-focused mobile app\n• Designed to combat loneliness and improve connectivity\n• Includes surveys, wireframes, personas, user journeys, prototyping",
      image: careConnectImage,
      link: "https://medium.com/@despina7kouli/ui-ux-case-study-careconnect-d68550eec35e"
    }
  ]

  const nextProjectSlide = () => {
    setCurrentProjectSlide((prev) => (prev + 1) % projects.length)
  }

  const prevProjectSlide = () => {
    setCurrentProjectSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToProjectSlide = (index: number) => {
    setCurrentProjectSlide(index)
  }

  const handleProjectClick = (link: string | null) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }
  return (
    <>
      <header className="navbar">
        <div className="container">
          <nav>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#experience" className="nav-link">Work Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <div className="logo">Despina Maria Koulisakis</div>
          <div className="social-icons">
            <a href="https://github.com/despinakouli" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/despina-maria-koulisakis/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:despinamaria1@hotmail.com" aria-label="Email">
              <i className="far fa-envelope"></i>
            </a>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="hero">
          <div className="text">
            <h1>Hi! I'm Despina! <span className="wave-emoji">👋</span></h1>            
            <h2 className="typing-text">New grad software developer</h2>
            <p>I am a recent software engineering graduate with a passion for web development and UI/UX design. As I transition into my career, I aim to bring creative, user-centered solutions to the table and add a unique touch to every project I take on.</p>
            <p>Currently expanding my skill set with Angular and actively seeking opportunities to grow in web development.</p>
          </div>
          <div className="avatar">
            <img src={avatar} alt="Avatar" />
            <a href="/Despina_Maria_Koulisakis.docx.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">Check out my resume!</a>
          </div>
        </div>
        
        <div id="skills" className="skills-section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <div className="icon-placeholder">👩‍💻</div>
              </div>
              <h3>Languages</h3>
              <ul>
                <li>Java</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>C++</li>
                <li>C#</li>
                <li>Python</li>
                <li>HTML & CSS</li>
                <li>SQL</li>
              </ul>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">
                <div className="icon-placeholder">🛠️</div>
              </div>
              <h3>Frameworks/Tools</h3>
              <ul>
                <li>React.JS</li>
                <li>React Native</li>
                <li>Node.JS</li>
                <li>.NET</li>
                <li>Docker</li>
                <li>Wireshark</li>
                <li>Git & Github</li>
              </ul>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">
                <div className="icon-placeholder">🖥️</div>
              </div>
              <h3>Dev Enviroments</h3>
              <ul>
                <li>Visual Studio Code</li>
                <li>Visual Studio</li>
                <li>Android Studio</li>
              </ul>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <div className="icon-placeholder">🎨</div>
              </div>
              <h3>Design Tools</h3>
              <ul>
                <li>Figma</li>
                <li>Canva</li>
                <li>Adobe Creative Cloud</li>
              </ul>
            </div>

          </div>
        </div>
        
        <div id="experience" className="experience-section">
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-content">
            <div className="experience-item">
              <div className="experience-header">
                <h3>Software Development Intern - Frontend</h3>
                <span className="experience-date">Jun - Aug (2024)</span>
              </div>
              <p className="company-name">Intrado</p>
              <p className="location">Montreal, Canada</p>
            </div>
          </div>
        </div>
        
        <div id="projects" className="projects-section">
          <h2 className="section-title">Projects</h2>
          <div className="projects-carousel">
            <button className="carousel-btn prev-btn" onClick={prevProjectSlide}>
              ‹
            </button>
            
            <div className="projects-carousel-container">
              <div 
                className="projects-carousel-slides" 
                style={{ transform: `translateX(-${currentProjectSlide * 100}%)` }}
              >
                {projects.map((project) => (
                  <div key={project.id} className="project-slide">
                    <div 
                      className={`project-card ${project.link ? 'clickable' : ''}`}
                      onClick={() => handleProjectClick(project.link)}
                      style={{ cursor: project.link ? 'pointer' : 'default' }}
                    >
                      <div className="project-image">
                        <img src={project.image} alt={project.title} />
                      </div>
                      <div className="project-content">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        {project.link && (
                          <p className="project-link-hint">Click to view demo</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="carousel-btn next-btn" onClick={nextProjectSlide}>
              ›
            </button>
          </div>
          
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentProjectSlide ? 'active' : ''}`}
                onClick={() => goToProjectSlide(index)}
              />
            ))}
          </div>
        </div>
        
        <div id="contact" className="contact-section">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <div 
              className="contact-item"
              onClick={() => window.location.href = 'mailto:despinamaria1@hotmail.com'}
            >
              <div className="contact-icon">📧</div>
              <div className="contact-info">
                <h3>Email</h3>
              </div>
            </div>
            
            <div 
              className="contact-item"
              onClick={() => window.open('https://www.linkedin.com/in/despina-maria-koulisakis/', '_blank', 'noopener,noreferrer')}
            >
              <div className="contact-icon">💼</div>
              <div className="contact-info">
                <h3>LinkedIn</h3>
              </div>
            </div>
          </div>
        </div>
        
        <footer className="footer">
          <div className="footer-content">
            <p className="footer-text">Built with ❤️ using modern web technologies</p>
            <p className="footer-copyright">© 2025 Despina Maria Koulisakis. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App