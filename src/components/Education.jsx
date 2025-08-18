import React from 'react';

const educationList = [
  {
    institution: 'University of British Columbia',
    degree: 'Bachelor of Applied Science in Computer Engineering',
    period: '2023 – Present',
    // details: 'Focusing on software development and algorithms.',
  },
];

export default function Education() {
  return (
    <section id="education" style={{ margin: '4rem 0' }}>
      <h2 style={{ color: '#ffffff', marginBottom: '2rem', fontSize: '2rem', textAlign: 'center', fontWeight: 700 }}>Education</h2>
      <div style={{
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: '20px',
        padding: '2rem',
        margin: '0 auto',
        maxWidth: '600px',
        boxShadow: '0 6px 24px 0 rgba(167,139,250,0.12)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        textAlign: 'center',
        color: '#111',
      }}>
        {educationList.map((edu, idx) => (
          <div key={idx} style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem', color: '#a78bfa' }}>{edu.institution}</h3>
            <p style={{ margin: 0, fontWeight: 500, color: '#111' }}>{edu.degree}</p>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#444' }}>{edu.period}</p>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
