import React from 'react';
export default function Contact() {
  return (
    <section id="contact" style={{ color: '#fff', padding: '2rem 0', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Contact</h2>
      <p style={{ marginBottom: '1.5rem' }}>Here is my contact information</p>
      <div style={{ fontSize: '1.1rem', lineHeight: '2' }}>
        <div>Email: <a href="mailto:kzong01@student.ubc.ca" style={{ color: '#646cff' }}>kzong01@student.ubc.ca</a></div>
        <div>LinkedIn: <a href="https://linkedin.com/in/kathryne-zong" target="_blank" rel="noopener noreferrer" style={{ color: '#646cff' }}>linkedin.com/in/kathryne-zong</a></div>
        <div>GitHub: <a href="https://github.com/kathrynezong" target="_blank" rel="noopener noreferrer" style={{ color: '#646cff' }}>github.com/kathrynezong</a></div>
      </div>
    </section>
  );
}