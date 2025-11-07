import { Suspense, lazy } from 'react'
import './SplineSection.css'

const Spline = lazy(() => import('@splinetool/react-spline'))

const SplineSection = () => {
  return (
    <section className="spline-section" id="interactive">
      <div className="spline-container">
        {/* Left content */}
        <div className="spline-content">
          <h2>Experience Interactive Learning</h2>
          <p>
            Bring your imagination to life with immersive 3D technology. Our students learn by creating, exploring, and
            building real projects that spark curiosity and innovation.
          </p>
          <a href="#enroll" className="spline-cta">
            Start Learning Today
          </a>
        </div>

        {/* Right 3D scene */}
        <div className="spline-visual">
          <Suspense
            fallback={
              <div className="spline-loader">
                <div className="loader-spinner"></div>
                <p>Loading 3D Scene...</p>
              </div>
            }
          >
            <Spline
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="spline-canvas"
            />
          </Suspense>
        </div>
      </div>
    </section>
  )
}

export default SplineSection
