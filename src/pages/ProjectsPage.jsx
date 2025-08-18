import React from 'react';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=E-Commerce+Platform",
      github: "#",
      live: "#",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart functionality",
        "Payment processing with Stripe",
        "Admin dashboard for inventory management"
      ]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration, and progress tracking.",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      image: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Task+Management+App",
      github: "#",
      live: "#",
      features: [
        "Real-time task updates",
        "Team collaboration",
        "Progress tracking and analytics",
        "File attachments",
        "Mobile responsive design"
      ]
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that displays current weather conditions and forecasts using multiple weather APIs.",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      image: "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Weather+Dashboard",
      github: "#",
      live: "#",
      features: [
        "Current weather conditions",
        "5-day weather forecast",
        "Interactive weather maps",
        "Location-based weather",
        "Weather alerts and notifications"
      ]
    }
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ height: '180px' }} />
      <h1 style={{ textAlign: 'center', margin: '0 0 30px 0', color: '#ffffff', fontSize: '2rem', width: '100%' }}>
        Projects
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'grid', gap: '3rem', maxWidth: '900px', width: '100%' }}>
          {projects.map(project => (
            <div key={project.id} className="modern-card" style={{
              backgroundColor: 'rgba(255,255,255,0.95)',
              borderRadius: '20px',
              padding: '2rem',
              margin: '0 0.5rem',
              boxShadow: '0 6px 24px 0 rgba(167,139,250,0.12)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
            }}
            onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.025)'; e.currentTarget.style.boxShadow = '0 12px 32px 0 rgba(167,139,250,0.18)'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 6px 24px 0 rgba(167,139,250,0.12)'; }}
            >
              <h3 style={{ color: '#a78bfa', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>{project.title}</h3>
              <h4 style={{ color: '#7c3aed', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{project.subtitle}</h4>
              <p style={{ color: '#444', marginBottom: '1rem', lineHeight: '1.6' }}>{project.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                {project.technologies.map(tech => (
                  <span key={tech} style={{
                    backgroundColor: '#ede9fe',
                    color: '#7c3aed',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.95rem',
                    fontWeight: 500
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                  color: '#a78bfa',
                  textDecoration: 'underline',
                  fontWeight: 600
                }}>
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 