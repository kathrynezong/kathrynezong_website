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
        "Researched, implemented, and evaluated alternative 3D pose estimation and surface normal calculation methods using the Python Open3D library, improving color correction accuracy and overall rendering quality",
        "Extended and refactored the codebase to support new data formats and enhance flexibility for future features and applications",
        "Collaborate in Agile workflows through daily stand-up meetings and project management tools including Jira, Git, and Azure DevOps"
      ],
      technologies: ["C++", "Python", "CMake", "GTest", "Azure DevOps", "Git", "Jira", "Jenkins"]
    },
    {
      id: 2,
      company: "Open Robotics UBC",
      position: "Software/Firmware Member",
      duration: "Jan 2025 - Present",
      location: "Vancouver, BC",
      achievements: [
        "Firmware development using C/C++ for ultrasonic, IMU, and LiDAR sensors.",
        "Implementing unit tests for sensor modules using CMake and Google Test to verify sensor accuracy and system reliability",
        "Collaborating on design of a scalable telemetry system for real-time sensor data collection, visualization, and post-processing using ESP-32 microcontrollers"
      ],
      technologies: ["C++", "C", "CMake", "Google Test", "ESP-32", "RTOS", "ROS", "GitHub"]
    },
    {
      id: 3,
      company: "Math Tutor Network",
      position: "Math Tutor",
      duration: "2024 - 2025",
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
    "Programming Languages": [
      "C / C++",
      "Python",
      "Java",
      "JavaScript",
      "Swift",
      "SystemVerilog",
      "ARM Assembly"
    ],
  
    "Hardware & Embedded Systems": [
      "FPGA Development",
      "Embedded Systems",
      "Arduino",
      "Circuit Analysis",
      "Lab Instrumentation"
    ],
  
    "Web & Software": [
      "HTML",
      "CSS",
      "REST APIs",
      "FastAPI",
      "React",
      "Next.js"
    ],
  
    "Tools & Workflow": [
      "Git",
      "Linux",
      "CMake",
      "CI/CD",
      "Quartus Prime",
      "ModelSim",
      "PlatformIO",
      "VS Code"
    ]
  };
  

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', paddingTop: '2rem' }}>
      <h1 style={{ textAlign: 'center', margin: '0 0 60px 0', color: '#90D5FF', fontSize: '2.5rem', width: '100%', fontWeight: 600 }}>
        Experience & Skills
      </h1>
      
      {/* Experience Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ color: '#90D5FF', marginBottom: '2rem', fontSize: '2rem', textAlign: 'center', fontWeight: 600 }}>Experience</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'grid', gap: '2rem', maxWidth: '900px', width: '100%' }}>
            {experience.map(job => (
              <div key={job.id} id={`job-${job.id}`} className="modern-card" style={{
                backgroundColor: '#ffffff',
                border: '2px solid #90D5FF',
                borderRadius: '12px',
                padding: '2rem',
                margin: '0 0.5rem',
                transition: 'transform 0.2s',
                cursor: 'pointer',
              }}
              onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(144, 213, 255, 0.3)'; }}
              onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ color: '#90D5FF', marginBottom: '0.5rem', fontSize: '1.5rem', fontWeight: 600 }}>
                      {job.position}
                    </h3>
                    <h4 style={{ color: '#90D5FF', marginBottom: '0.25rem', fontSize: '1.2rem', fontWeight: 600 }}>
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
                  <h4 style={{ color: '#90D5FF', marginBottom: '0.75rem', fontWeight: 600 }}>Description:</h4>
                  <ul style={{ color: '#1a1a1a', paddingLeft: '1.5rem' }}>
                    {job.achievements.map((achievement, index) => (
                      <li key={index} style={{ marginBottom: '0.5rem', lineHeight: '1.5' }}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#90D5FF', marginBottom: '0.75rem', fontWeight: 600 }}>
                    {job.technologies ? 'Technologies Used:' : 'Skills:'}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {(job.technologies || job.skills).map(item => (
                      <span key={item} style={{
                        backgroundColor: '#E6F5FF',
                        color: '#90D5FF',
                        border: '1px solid #90D5FF',
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
        <h2 style={{ color: '#90D5FF', marginBottom: '2rem', fontSize: '2rem', textAlign: 'center', fontWeight: 600 }}>Technical Skills</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '900px', width: '100%' }}>
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="modern-card" style={{
                backgroundColor: '#ffffff',
                border: '2px solid #90D5FF',
                borderRadius: '12px',
                padding: '1.5rem',
                margin: '0 0.5rem',
                transition: 'transform 0.2s',
                cursor: 'pointer',
              }}
              onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(144, 213, 255, 0.3)'; }}
              onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <h3 style={{ color: '#90D5FF', marginBottom: '1rem', fontSize: '1.3rem', fontWeight: 600 }}>
                  {category}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {skillList.map(skill => (
                    <span key={skill} style={{
                      backgroundColor: '#E6F5FF',
                      color: '#90D5FF',
                      border: '1px solid #90D5FF',
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