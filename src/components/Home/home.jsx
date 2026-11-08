import React from 'react';
import './home.css';

export default function Home() {
  const techStack = [
    { name: 'HTML', icon: '🌐' }, { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' }, { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' }, { name: 'TypeScript', icon: 'TS' },
    { name: 'Node.js', icon: '🟢' }, { name: 'Tailwind CSS', icon: '🌊' },
    { name: 'React Native', icon: '📱' }, { name: 'Flutter', icon: '💙' }
  ];

  const services = [
    { title: 'Web Development', description: 'Scalable, responsive web apps built with React & Next.js.', icon: '💻' },
    { title: 'Mobile Apps', description: 'Cross-platform apps using React Native & Flutter.', icon: '📱' },
    { title: 'Backend Systems', description: 'Robust APIs with Node.js & TypeScript.', icon: '⚙️' }
  ];

  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <h1 className="hero-greeting">Hi, I'm Alex Carter</h1>
          <h2 className="hero-role">Full Stack Developer</h2>
          <p className="hero-bio">
            I design & develop immersive web & mobile experiences with futuristic technologies, blending code with alien innovation.
          </p>
          <div className="hero-cta-buttons">
            <button className="primary-btn">→ View Projects</button>
            <button className="secondary-btn">✉ Contact Me</button>
          </div>
          <div className="tech-stack-container">
            <span className="tech-stack-label">TECH STACK</span>
            <div className="tech-badges-grid">
              {techStack.map((tech) => (
                <div key={tech.name} className="tech-badge">
                  <span>{tech.icon}</span> {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="cyber-hud-frame">
            <div className="hud-overlay-status">
              <span className="status-dot"></span>
              <span>STATUS: AVAILABLE FOR FREELANCE</span>
            </div>
          </div>
        </div>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <div className="service-icon-box">{s.icon}</div>
            <div className="service-info">
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}