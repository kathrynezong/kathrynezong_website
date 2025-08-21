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
    <section id="experience" style={{ margin: '4rem 0' }}>
      <h2 style={{ color: '#ffffff', marginBottom: '2rem', fontSize: '2rem', textAlign: 'center', fontWeight: 700 }}>Experience</h2>
      <div style={{ display: 'grid', gap: '2rem', justifyContent: 'center' }}>
        {projects.map((p, idx) => (
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
            onClick={() => navigate(`/experience#job-${p.id}`)}
          >
            <h3 style={{ margin: '0 0 0.5rem', color: '#a78bfa' }}>{p.title}</h3>
            <p style={{ margin: 0, color: '#555' }}>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}