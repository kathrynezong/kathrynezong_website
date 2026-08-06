import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Experience() {
  const navigate = useNavigate();
  return (
    <section id="experience" style={{ margin: '3rem 0' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#1a1a1a', marginBottom: '1.5rem', fontSize: '1.3rem', fontWeight: 600 }}>what i've been up to:</h3>
        
        <div>
          <ul style={{ color: '#1a1a1a', listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
            <li style={{ marginBottom: '1rem', cursor: 'pointer' }} onClick={() => navigate(`/experience#job-0`)}>
              <span style={{ color: '#90D5FF', fontWeight: 600 }}>Royal Bank of Canada</span> - Software Developer Co-op (May 2026 - Present)
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem', marginLeft: '2rem' }}>
                Building a vulnerability tracking dashboard and automating incident analysis with AI agent skills...
              </p>
            </li>
            <li style={{ marginBottom: '1rem', cursor: 'pointer' }} onClick={() => navigate(`/experience#job-1`)}>
              <span style={{ color: '#90D5FF', fontWeight: 600 }}>Arius Technology Inc.</span> - Software Engineering Co-op (May 2025 - Dec 2025)
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem', marginLeft: '2rem' }}>
                Refactored C++ and Python processing pipelines and improved point cloud processing with Open3D...
              </p>
            </li>
            <li style={{ marginBottom: '1rem', cursor: 'pointer' }} onClick={() => navigate(`/experience#job-2`)}>
              <span style={{ color: '#90D5FF', fontWeight: 600 }}>UBC Open Robotics</span> - Firmware/Software Member (Jan 2025 - Present)
              <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem', marginLeft: '2rem' }}>
                Designed a real-time telemetry system with ESP32 and TCP/JSON client-server interface...
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
