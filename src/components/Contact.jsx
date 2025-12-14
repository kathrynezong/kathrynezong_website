import React from 'react';
export default function Contact() {
  return (
    <section id="contact" style={{ color: '#1a1a1a', margin: '3rem 0' }}>
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
        feel free to reach out!
      </p>
      <div style={{ fontSize: '1rem', lineHeight: '2' }}>
        <div style={{ marginBottom: '0.5rem' }}>
          📧 <a href="mailto:kzong01@student.ubc.ca" style={{ color: '#90D5FF' }}>kzong01@student.ubc.ca</a>
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          🌐 <a href="https://linkedin.com/in/kathryne-zong" target="_blank" rel="noopener noreferrer" style={{ color: '#90D5FF' }}>linkedin</a>
        </div>
        <div>
          💻 <a href="https://github.com/kathrynezong" target="_blank" rel="noopener noreferrer" style={{ color: '#90D5FF' }}>github</a>
        </div>
      </div>
    </section>
  );
}