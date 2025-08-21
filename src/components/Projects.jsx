import React from 'react';
import { useNavigate } from 'react-router-dom';
const projects = [
  { 
    title: 'Obstacle Avoidance Vehicle', 
    description: 'Assembled key components including DC motors, motor driver, and ultrasonic sensor to enable autonomous navigation...', 
    link: '#', 
    id: 1 
  },
  { 
    title: 'Simple RISC Machine', 
    description: 'Designed and implemented a Simple RISC processor, including data path and finite state machine controller...', 
    link: '#', 
    id: 2 
  },
  { 
    title: 'Quiz Application', 
    description: 'Collaborated with other students to design and implement a quiz application for UBC students...', 
    link: '#', 
    id: 3 
  },
];
export default function Projects() {
  const navigate = useNavigate();
  return (
    <section id="projects" style={{ margin: '4rem 0' }}>
      <h2 style={{ color: '#ffffff', marginBottom: '2rem', fontSize: '2rem', textAlign: 'center', fontWeight: 700 }}>Projects</h2>
      <div style={{ display: 'grid', gap: '2rem', justifyContent: 'center' }}>
        {projects.map((project, idx) => (
          <div
            key={idx}
            style={{
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
            onClick={() => navigate(`/projects#project-${project.id}`)}
          >
            <h3 style={{ margin: '0 0 0.5rem', color: '#a78bfa' }}>{project.title}</h3>
            <p style={{ margin: 0, color: '#555' }}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}