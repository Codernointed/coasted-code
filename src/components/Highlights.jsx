import './Highlights.css'

const features = [
  {
    title: "Mentors Who've Been There, Built That",
    description:
      'Industry professionals and passionate educators guide every session with hands-on mentorship and real-world context.',
    image: '/coasted_code_assets/expert_instructors.png',
    alt: 'Illustration of a friendly robot instructor holding a tablet',
  },
  {
    title: 'Projects That Actually Matter',
    description:
      'Learners build robotics and AI creations from day one, transforming curiosity into confident skills through practice.',
    image: '/coasted_code_assets/Hands-On%20Projects.png',
    alt: 'Circuit board illustration representing hands-on STEM projects',
  },
  {
    title: 'Skills That Outlast the Classroom',
    description:
      'We nurture critical thinking, collaboration, and creativity so students are prepared for every opportunity ahead.',
    image: '/coasted_code_assets/Future-Ready%20Skills.png',
    alt: 'Students wearing VR headsets collaborating on digital ideas',
  },
]

const Highlights = () => {
  return (
    <section className="impact" id="highlights">
      <div className="impact-inner">
        <div className="impact-heading">
          <h2>Building the Inventors Nobody's Met Yet</h2>
          <p>
            We build experiences, where young minds get their hands dirty, solve real problems, and discover what they're capable of becoming.
          </p>
        </div>
        <div className="impact-grid">
          {features.map((feature) => (
            <article className="impact-card" key={feature.title}>
              <div className="impact-art">
                <img src={feature.image} alt={feature.alt} loading="lazy" />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
      <span className="impact-deco impact-deco--left" aria-hidden="true" />
      <span className="impact-deco impact-deco--right" aria-hidden="true" />
    </section>
  )
}

export default Highlights
