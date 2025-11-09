import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Coasted Code home">
          <img src="/coasted_code_assets/cclogo.png" alt="Coasted Code" />
          <span>Coasted Code</span>
        </a>
        
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a>
          <a href="#schools" onClick={() => setMenuOpen(false)}>For Schools</a>
          <a href="#team" onClick={() => setMenuOpen(false)}>Team</a>
          <a href="#login" className="mobile-login" onClick={() => setMenuOpen(false)}>Student Login</a>
        </nav>

        <div className="header-actions">
          <a className="login-link" href="#login">
            Student Login
          </a>
          <a className="primary-cta" href="#enroll">
            Enroll Now
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
