import React from 'react';
import { useNavigate } from 'react-router-dom';
const projects = [
  { 
    title: '20-20-20 Break Timer Extension', 
    description: 'A Chrome extension timer that follows the 20-20-20 rule with screen lock reminders to help protect your eyes...', 
    link: '#', 
    id: 0 
  },
  { 
    title: 'ResumeCritic', 
    description: 'A full-stack NLP-powered resume analysis platform that analyzes resumes against job descriptions...', 
    link: '#', 
    id: 5 
  },
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
  { 
    title: 'Portfolio Website', 
    description: 'Personal portfolio website showcasing projects, experience, and skills...', 
    link: '#', 
    id: 4 
  },
];
export default function Projects() {
  const navigate = useNavigate();
  return (
    <section id="projects" style={{ margin: '3rem 0' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#1a1a1a', marginBottom: '1.5rem', fontSize: '1.3rem', fontWeight: 600 }}>making/made:</h3>
        
        <div>
          <ul style={{ color: '#1a1a1a', listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '1rem', cursor: 'pointer' }} onClick={() => navigate(`/projects#project-0`)}>
              <span style={{ color: '#90D5FF', fontWeight: 600 }}>20-20-20 Break Timer Extension</span> - Personal (Nov 2025)
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem', marginLeft: '2rem' }}>
                A Chrome extension timer that follows the 20-20-20 rule with screen lock reminders to help protect your eyes...
              </p>
            </li>
            <li style={{ marginBottom: '1rem', cursor: 'pointer' }} onClick={() => navigate(`/projects#project-5`)}>
              <span style={{ color: '#90D5FF', fontWeight: 600 }}>ResumeCritic</span> - Personal (Sept 2025 - Present)
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem', marginLeft: '2rem' }}>
                A full-stack NLP-powered resume analysis platform that analyzes resumes against job descriptions...
              </p>
            </li>
            <li style={{ marginBottom: '1rem', cursor: 'pointer' }} onClick={() => navigate(`/projects#project-1`)}>
              <span style={{ color: '#90D5FF', fontWeight: 600 }}>Portfolio Website</span> - Personal (Aug 2025)
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem', marginLeft: '2rem' }}>
                Personal portfolio website showcasing projects, experience, and skills...
              </p>
            </li>
            <li style={{ marginBottom: '1rem', cursor: 'pointer' }} onClick={() => navigate(`/projects#project-2`)}>
              <span style={{ color: '#90D5FF', fontWeight: 600 }}>Obstacle Avoidance Vehicle</span> - Personal (Dec 2024)
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem', marginLeft: '2rem' }}>
                Assembled key components including DC motors, motor driver, and ultrasonic sensor to enable autonomous navigation...
              </p>
            </li>
            <li style={{ marginBottom: '1rem', cursor: 'pointer' }} onClick={() => navigate(`/projects#project-3`)}>
              <span style={{ color: '#90D5FF', fontWeight: 600 }}>Simple RISC Machine</span> - UBC (Oct 2024 - Dec 2024)
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem', marginLeft: '2rem' }}>
                Designed and implemented a Simple RISC processor, including data path and finite state machine controller...
              </p>
            </li>
            <li style={{ marginBottom: '1rem', cursor: 'pointer' }} onClick={() => navigate(`/projects#project-4`)}>
              <span style={{ color: '#90D5FF', fontWeight: 600 }}>Quiz Application</span> - UBC (Oct 2024 - Dec 2024)
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem', marginLeft: '2rem' }}>
                Collaborated with other students to design and implement a quiz application for UBC students...
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}