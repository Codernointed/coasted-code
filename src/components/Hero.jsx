import './Hero.css'

const heroImagePath = '/coasted_code_assets/hero-child-illustration.png'

const Hero = () => {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <div className="hero-text">
          {/* <span className="hero-eyebrow">Ghana's First AI School for Kids</span> */}
          <h1>
            <span className="hero-line hero-line--primary">Empower the Next Generation.</span>
            <span className="hero-line">Innovate with AI &amp;</span>
            <span className="hero-line hero-line--accent">Robotics.</span>
          </h1>
          <p className="hero-subtitle">Ghana's #1 School for Young Innovators</p>
          <div className="hero-actions">
            <a className="hero-primary" href="#enroll">
              Start Their Future!
            </a>
          </div>
          <p className="hero-footnote">Inspiring kids in Accra, Kumasi &amp; beyond.</p>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <img src={heroImagePath} alt="" loading="eager" />
        </div>
      </div>
    </section>
  )
}

export default Hero
