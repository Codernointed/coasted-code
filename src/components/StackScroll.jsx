import './StackScroll.css'

const programs = [
  {
    number: '01',
    title: 'AI-Powered Learning',
    description:
      "Personalized curriculum that adapts to each student's learning pace and style with intelligent recommendations.",
  },
  {
    number: '02',
    title: 'Robotics & Automation',
    description:
      'Hands-on experience with cutting-edge robotics and automation technologies in our state-of-the-art labs.',
  },
  {
    number: '03',
    title: 'Programming & Cybersecurity',
    description:
      'Master safe coding practices, cybersecurity fundamentals, and ethical hacking concepts through hands-on projects.',
  },
  {
    number: '04',
    title: 'Online Classes',
    description:
      'Real-time interaction with expert instructors with small class sizes for personalized attention.',
  },
  {
    number: '05',
    title: 'Parental Controls',
    description:
      'Advanced screen time management and learning progress tracking with detailed analytics and reports.',
  },
  {
    number: '06',
    title: 'AI Portfolio Creation',
    description:
      'Build an impressive AI portfolio showcasing your projects, skills, and achievements for future opportunities.',
  },
]

const StackScroll = () => {
  return (
    <section className="stack-scroll" id="programs">
      <div className="stack-scroll-inner">
        <div className="stack-left">
          <h2>What We Offer</h2>
          <p>
            Comprehensive programs designed to prepare young minds for the AI-driven future through hands-on learning and
            real-world applications.
          </p>
          <a className="hero-primary" href="#enroll">
              You Ought to Try!
            </a>
        </div>
        <div className="stack-right">
          {programs.map((program, index) => (
            <article className={`stack-card stack-card-${index + 1}`} key={program.number}>
              <div className="stack-number">
                <span>{program.number}</span>
              </div>
              <h3>{program.title}</h3>
              <div className="stack-divider"></div>
              <p>{program.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StackScroll
