import React from 'react';

const educationList = [
  {
    institution: 'University of British Columbia',
    degree: 'Bachelor of Applied Science in Computer Engineering',
    period: '2023 – Present',
    details: 'Focusing on software development and algorithms.',
  },
];

export default function Education() {
  return (
    <section id="education" style={{ margin: '4rem 0' }}>
      <h2>Education</h2>
      {educationList.map((edu, idx) => (
        <div key={idx} style={{ marginBottom: '1rem' }}>
          <h3 style={{ margin: '0 0 0.25rem' }}>{edu.degree}</h3>
          <p style={{ margin: '0 0 0.25rem', fontStyle: 'italic' }}>
            {edu.institution} | {edu.period}
          </p>
          <p style={{ margin: 0 }}>{edu.details}</p>
        </div>
      ))}
    </section>
  );
}
