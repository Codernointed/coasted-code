import './Header.css'

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Coasted Code home">
          <img src="/coasted_code_assets/cclogo.png" alt="Coasted Code" />
          <span>Coasted Code</span>
        </a>
        <nav className="main-nav" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#schools">For Schools</a>
          <a href="#team">Team</a>
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
