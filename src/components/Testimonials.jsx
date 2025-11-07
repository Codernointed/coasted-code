import './Testimonials.css'

const testimonials = [
  {
    quote:
      "My daughter has learned so much through Coasted Code. The AI-powered learning makes it fun and engaging!",
    name: 'Mariam Akogo',
    role: 'Parent',
  },
  {
    quote:
      "The robotics classes are amazing! I've built my own robot and learned Python programming.",
    name: 'Michael Nyini',
    role: 'Student',
  },
  {
    quote:
      "The mentors are incredible and my son has gained so much confidence in his coding abilities.",
    name: 'Emma Minta',
    role: 'Parent',
  },
  {
    quote:
      "Coasted Code has transformed my daughter's interest in technology into real skills. She's now building her own AI projects!",
    name: 'Kwame Mensah',
    role: 'Parent',
  },
]

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-inner">
        <div className="testimonials-header">
          <h2>
            Thousands of wonderful people already use <span className="highlight-text">Coasted Code</span>
          </h2>
          <p>... and can't stop squeaking our praises</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <article className="testimonial-card" key={index}>
              <blockquote>
                <p>"{testimonial.quote}"</p>
              </blockquote>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
