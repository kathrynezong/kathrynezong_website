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
    <section id="education" style={{ margin: '3rem 0' }}>
      <p style={{ color: '#6b7280', fontSize: '1.1rem', marginBottom: '1rem' }}>
        {/* studying at the university of british columbia, pursuing a bachelor's in computer engineering */}
      </p>
    </section>
  );
}
