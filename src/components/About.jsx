import React from 'react';
export default function About() {
  return (
    <section id="about" style={{ margin: '3rem 0' }}>
      <p style={{ color: '#1a1a1a', fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
        hi! i'm kathryne!
      </p>
      <div style={{ marginBottom: '2rem' }}>
        <p style={{ color: '#6b7280', fontSize: '1.1rem', marginBottom: '0.5rem' }}>currently:</p>
        <ul style={{ color: '#1a1a1a', fontSize: '1rem', listStyle: 'none', padding: 0 }}>
          <li> ⋆｡‧˚ 🩵ིྀ ˚‧｡⋆ studying computer engineering at the University of British Columbia</li>
          <li> ✧₊˚ʚ 💙 ₊˚✧ ﾟworking at Royal Bank of Canada as a Software Developer Co-op</li>
        </ul>
      </div>
    </section>
  );
}
