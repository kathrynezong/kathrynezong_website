import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ExperiencePage() {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL and scroll to that element
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Add a small delay to ensure the page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [location.hash]);

  const experience = [
    {
      id: 1,
      company: "Arius Technology Inc.",
      position: "Software Engineering Co-op",
      duration: "May 2025 - Present",
      location: "Richmond, BC",
      // description: "Leading development of enterprise web applications and mentoring junior developers.",
      achievements: [
        "Refactor and improve next-generation 2D/3D image acquisition and processing software",
        "Researched and proposed alternative techniques to determine 3D object position and orientation using Python Open3D library",
        "Tested and developed a replacement algorithm for surface normal calculations within the existing codebase,improving accuracy of color correction and overall rendering quality"
      ],
      technologies: ["C++", "Python", "CMake", "GTest", "Azure DevOps", "Git", "Jira", "Jenkins"]
    },
    {
      id: 2,
      company: "Open Robotics UBC",
      position: "Firmware Member",
      duration: "Jan 2025 - Present",
      location: "Vancouver, BC",
      // description: "Developed responsive web applications and collaborated with design teams.",
      achievements: [
        "Researching firmware modules in C++ capable of integrating ultrasonic, IMU, and lidar sensors on STM32 microcontroller",
        "Writing testcases for sensor modules to ensure validity, accuracy, and reliability using CMake and GMock",
        "Gaining practical knowledge of Robot Operating Systems (ROS) and Real-Time Operating Systems (RTOS)"
      ],
      technologies: ["C++", "RTOS", "ROS", "Github", "CMake", "GTest"]
    },
    {
      id: 3,
      company: "Math Tutor Network",
      position: "Math Tutor",
      duration: "2024 - Present",
      location: "Vancouver, BC",
      // description: "Contributed to various startup projects and learned modern development practices.",
      achievements: [
        "Designed personalized lessons to help high school students grasp complex math concepts and boostacademic performance",
        "Fostered confidence and problem-solving skills through one-on-one and group tutoring sessions",
        "Provided targeted support for homework, test preparation, and critical thinking development"
      ],
      skills: ["Communication", "Organization", "Patience", "Problem-solving", "Teaching"]
    }
  ];

  const skills = {
    "Languages": ["C/C++", "Python", "Java", "ARM", "SystemVerilog", "JavaScript"],
    "DevOps": ["CI/CD", "Git", "Linux"],
    "Tools": ["VS Code", "Jira", "Slack", "Notion", "Teams"]
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', paddingTop: '110px' }}>
      <h1 style={{ textAlign: 'center', margin: '0 0 60px 0', color: '#ffffff', fontSize: '2.5rem', width: '100%' }}>
        Experience & Skills
      </h1>
      
      {/* Experience Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ color: '#ffffff', marginBottom: '2rem', fontSize: '2rem', textAlign: 'center' }}>Experience</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'grid', gap: '2rem', maxWidth: '900px', width: '100%' }}>
            {experience.map(job => (
              <div key={job.id} id={`job-${job.id}`} className="modern-card" style={{
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
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ color: '#a78bfa', marginBottom: '0.5rem', fontSize: '1.5rem', fontWeight: 700 }}>
                      {job.position}
                    </h3>
                    <h4 style={{ color: '#7c3aed', marginBottom: '0.25rem', fontSize: '1.2rem', fontWeight: 600 }}>
                      {job.company}
                    </h4>
                    <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
                      {job.location} • {job.duration}
                    </p>
                  </div>
                </div>
                <p style={{ color: '#444', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  {job.description}
                </p>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#a78bfa', marginBottom: '0.75rem', fontWeight: 600 }}>Description:</h4>
                  <ul style={{ color: '#444', paddingLeft: '1.5rem' }}>
                    {job.achievements.map((achievement, index) => (
                      <li key={index} style={{ marginBottom: '0.5rem', lineHeight: '1.5' }}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#a78bfa', marginBottom: '0.75rem', fontWeight: 600 }}>
                    {job.technologies ? 'Technologies Used:' : 'Skills:'}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {(job.technologies || job.skills).map(item => (
                      <span key={item} style={{
                        backgroundColor: '#ede9fe',
                        color: '#7c3aed',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        fontSize: '0.95rem',
                        fontWeight: 500
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section>
        <h2 style={{ color: '#ffffff', marginBottom: '2rem', fontSize: '2rem', textAlign: 'center' }}>Technical Skills</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '900px', width: '100%' }}>
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="modern-card" style={{
                backgroundColor: 'rgba(255,255,255,0.95)',
                borderRadius: '20px',
                padding: '1.5rem',
                margin: '0 0.5rem',
                boxShadow: '0 6px 24px 0 rgba(167,139,250,0.12)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
              }}
              onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.025)'; e.currentTarget.style.boxShadow = '0 12px 32px 0 rgba(167,139,250,0.18)'; }}
              onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 6px 24px 0 rgba(167,139,250,0.12)'; }}
              >
                <h3 style={{ color: '#a78bfa', marginBottom: '1rem', fontSize: '1.3rem', fontWeight: 700 }}>
                  {category}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {skillList.map(skill => (
                    <span key={skill} style={{
                      backgroundColor: '#ede9fe',
                      color: '#7c3aed',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.95rem',
                      fontWeight: 500
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 