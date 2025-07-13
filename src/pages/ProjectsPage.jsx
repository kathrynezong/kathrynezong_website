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
      <h1 style={{ textAlign: 'center', marginBottom: '3rem', color: '#ffffff' }}>
        My Projects
      </h1>
      
      <div style={{ display: 'grid', gap: '3rem' }}>
        {projects.map(project => (
          <div key={project.id} style={{
            backgroundColor: '#2a2a2a',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
              <div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{ 
                    width: '100%', 
                    borderRadius: '8px',
                    marginBottom: '1rem'
                  }}
                />
              </div>
              
              <div>
                <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>{project.title}</h2>
                <p style={{ color: '#cccccc', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  {project.description}
                </p>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ color: '#ffffff', marginBottom: '0.5rem' }}>Technologies Used:</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.technologies.map(tech => (
                      <span key={tech} style={{
                        backgroundColor: '#646cff',
                        color: 'white',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.875rem'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ color: '#ffffff', marginBottom: '0.5rem' }}>Key Features:</h3>
                  <ul style={{ color: '#cccccc', paddingLeft: '1.5rem' }}>
                    {project.features.map((feature, index) => (
                      <li key={index} style={{ marginBottom: '0.25rem' }}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={project.github} style={{
                    backgroundColor: '#333',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}>
                    View Code
                  </a>
                  <a href={project.live} style={{
                    backgroundColor: '#646cff',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 