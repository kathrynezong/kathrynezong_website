import React from 'react';
const projects = [
  { title: 'Project One', description: 'A cool project using React.', link: '#' },
  { title: 'Project Two', description: 'Another cool project with Vite.', link: '#' },
];
export default function Projects() {
  return (
    <section id="projects" style={{ margin: '4rem 0' }}>
      <h2>Projects</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        {projects.map((p) => (
          <a key={p.title} href={p.link} style={{ width: '200px', padding: '1rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', textAlign: 'left' }}>
            <h3 style={{ margin: '0 0 0.5rem' }}>{p.title}</h3>
            <p style={{ margin: 0, color: '#555' }}>{p.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}