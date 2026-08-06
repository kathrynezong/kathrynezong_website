import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Projects() {
  const navigate = useNavigate();
  return (
    <section id="projects" style={{ margin: '3rem 0' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#1a1a1a', marginBottom: '1.5rem', fontSize: '1.3rem', fontWeight: 600 }}>making/made:</h3>
        
        <div>
          <ul style={{ color: '#1a1a1a', listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '1rem', cursor: 'pointer' }} onClick={() => navigate(`/projects#project-6`)}>
              <span style={{ color: '#90D5FF', fontWeight: 600 }}>Autonomous Vehicle Perception & Navigation System</span> - UBC (Jan 2026 - Apr 2026)
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem', marginLeft: '2rem' }}>
                Autonomous perception pipeline on the F1TENTH platform with LiDAR, RGB-D camera, and sign classification...
              </p>
            </li>
            <li style={{ marginBottom: '1rem', cursor: 'pointer' }} onClick={() => navigate(`/projects#project-7`)}>
              <span style={{ color: '#90D5FF', fontWeight: 600 }}>ARC4 Encryption Cracking Accelerator</span> - UBC (Mar 2026)
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem', marginLeft: '2rem' }}>
                SystemVerilog ARC4 decryption engine with dual-core brute-force key cracking on FPGA...
              </p>
            </li>
            <li style={{ marginBottom: '1rem', cursor: 'pointer' }} onClick={() => navigate(`/projects#project-0`)}>
              <span style={{ color: '#90D5FF', fontWeight: 600 }}>20-20-20 Break Timer Extension</span> - Personal (Nov 2025)
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem', marginLeft: '2rem' }}>
                A Chrome extension timer that follows the 20-20-20 rule with screen lock reminders to help protect your eyes...
              </p>
            </li>
            <li style={{ marginBottom: '1rem', cursor: 'pointer' }} onClick={() => navigate(`/projects#project-5`)}>
              <span style={{ color: '#90D5FF', fontWeight: 600 }}>ResumeCritic</span> - Personal (Sept 2025 - Dec 2025)
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem', marginLeft: '2rem' }}>
                Full-stack AI-powered resume analysis platform with semantic similarity scoring and LLM evaluation...
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
                Designed and implemented a Simple RISC processor with FSM-based control unit on FPGA...
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
