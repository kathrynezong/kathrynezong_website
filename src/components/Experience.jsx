import React from 'react';
import { useNavigate } from 'react-router-dom';
const projects = [
  { title: 'Software Engineering Co-op', description: 'Refactor and improve next-generation 2D/3D image acquisition...', link: '#', id: 1 },
  { title: 'Firmware Member', description: 'Researching firmware modules in C++ capable of integrating ultrasonic...', link: '#', id: 2 },
  { title: 'Math Tutor', description: 'Designed personalized lessons to help high school students grasp complex...', link: '#', id: 3 },
];
export default function Experience() {
  const navigate = useNavigate();
  return (
    <section id="experience" style={{ margin: '3rem 0' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#1a1a1a', marginBottom: '1.5rem', fontSize: '1.3rem', fontWeight: 600 }}>what i've been up to:</h3>
        
        <div>
          {/* <p style={{ color: '#1a1a1a', marginBottom: '1rem' }}>
            <span style={{ fontWeight: 600 }}>working at:</span>
          </p> */}
          <ul style={{ color: '#1a1a1a', listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '1rem', cursor: 'pointer' }} onClick={() => navigate(`/experience#job-1`)}>
              <span style={{ color: '#90D5FF', fontWeight: 600 }}>Arius Technology Inc.</span> - Software Engineering Co-op (May 2025 - Present)
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem', marginLeft: '2rem' }}>
                Refactoring next-generation 2D/3D image acquisition and processing software...
              </p>
            </li>
            <li style={{ marginBottom: '1rem', cursor: 'pointer' }} onClick={() => navigate(`/experience#job-2`)}>
              <span style={{ color: '#90D5FF', fontWeight: 600 }}>Open Robotics UBC</span> - Firmware Member (Jan 2025 - Present)
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem', marginLeft: '2rem' }}>
                Firmware development using C/C++ for ultrasonic, IMU, and LiDAR sensors...
              </p>
            </li>
            <li style={{ marginBottom: '1rem', cursor: 'pointer' }} onClick={() => navigate(`/experience#job-3`)}>
              <span style={{ color: '#90D5FF', fontWeight: 600 }}>Math Tutor Network</span> - Math Tutor (2024 - 2025)
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem', marginLeft: '2rem' }}>
                Designed personalized lessons to help high school students grasp complex math concepts...
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}