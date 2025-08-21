import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ProjectsPage() {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL and scroll to that element
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Add a small delay to ensure the page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [location.hash]);

  const projects = [
    {
      id: 1,
      title: "Obstacle Avoidance Vehicle",
      subtitle: "Personal • Dec 2024",
      description: "An autonomous vehicle project that demonstrates embedded systems programming and hardware integration.",
      achievements: [
        "Assembled key components including DC motors, motor driver, and ultrasonic sensor to enable autonomous navigation",
        "Wrote embedded C++ code for real-time sensor data processing and motor control",
        "Built supporting circuits to implement reliable obstacle detection and navigation"
      ],
      technologies: ["Arduino", "C++", "Hardware components"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Simple RISC Machine",
      subtitle: "UBC • Oct 2024 - Dec 2024",
      description: "A complete processor design project implementing a Simple RISC architecture with FPGA integration.",
      achievements: [
        "Designed and implemented a Simple RISC processor, including data path and finite state machine controller",
        "Programmed memory mapped I/O for external communication, increasing processor versatility",
        "Verified functionality using ModelSim and Quartus by simulating memory and instruction in SystemVerilog and integrating with FPGA"
      ],
      technologies: ["SystemVerilog", "ModelSim", "Quartus", "FPGA"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Quiz Application",
      subtitle: "UBC • Oct 2024 - Dec 2024",
      description: "A collaborative educational application designed to help UBC students study more efficiently.",
      achievements: [
        "Collaborated with other students to design and implement a quiz application",
        "Utilized a database with questions and answers, randomly generates questions for users to answer",
        "Designed to help UBC students study more efficiently and in a more interactive way"
      ],
      technologies: ["Swift"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', paddingTop: '110px' }}>
      <h1 style={{ textAlign: 'center', margin: '0 0 60px 0', color: '#ffffff', fontSize: '2.5rem', width: '100%' }}>
        Projects
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'grid', gap: '3rem', maxWidth: '900px', width: '100%' }}>
          {projects.map(project => (
            <div key={project.id} id={`project-${project.id}`} className="modern-card" style={{
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
              <p style={{ color: '#444', marginBottom: '1.5rem', lineHeight: '1.6' }}>{project.description}</p>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#a78bfa', marginBottom: '0.75rem', fontWeight: 600 }}>Key Achievements:</h4>
                <ul style={{ color: '#444', paddingLeft: '1.5rem' }}>
                  {project.achievements.map((achievement, index) => (
                    <li key={index} style={{ marginBottom: '0.5rem', lineHeight: '1.5' }}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
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
              {/* Temporarily disabled - no project links available
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                  color: '#a78bfa',
                  textDecoration: 'underline',
                  fontWeight: 600
                }}>
                  View Project
                </a>
              )}
              */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 