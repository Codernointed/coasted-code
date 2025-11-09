import { useState } from 'react'
import { Menu, X } from 'lucide-react'
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
        
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
          <button 
            className="mobile-close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
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
          
          <button 
            className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  )
}

export default Header
