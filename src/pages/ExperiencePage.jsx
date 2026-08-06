import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ExperiencePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [location.hash]);

  const experience = [
    {
      id: 0,
      company: "Royal Bank of Canada",
      position: "Software Developer Co-op",
      duration: "May 2026 - Present",
      location: "Vancouver, BC",
      achievements: [
        "Automated incident analysis and reporting by configuring AI agent skills (GitHub Copilot) to analyze incident data and generate structured reports, reducing manual reporting effort",
        "Developed a FastAPI and React/TypeScript vulnerability tracking dashboard, adopted by multiple team members, to consolidate findings across supported applications and auto-detect resolved and reopened vulnerabilities from weekly scan reports",
        "Implemented user authentication, application onboarding, and activity logging to track which users performed which actions across the platform",
        "Authored prompts and curated reference resources for an internal AI agent to surface runbook-based remediation steps, escalation paths, and business impact during incidents"
      ],
      technologies: ["FastAPI", "React", "TypeScript", "Python", "GitHub Copilot", "Git"]
    },
    {
      id: 1,
      company: "Arius Technology Inc.",
      position: "Software Engineering Co-op",
      duration: "May 2025 - December 2025",
      location: "Richmond, BC",
      achievements: [
        "Refactored and optimized C++ and Python processing pipelines across hardware–software toolchains, improving numerical accuracy and runtime performance",
        "Refactored and improved next-generation 2D/3D image acquisition and processing software",
        "Extended the pose transformation pipeline with YAML-based configuration parsing to support new data formats while maintaining backward compatibility",
        "Extended and refactored the codebase to support new data formats and enhance flexibility for future features and applications",
        "Improved point cloud processing using Open3D, optimizing normal estimation and plane segmentation algorithms for increased geometric accuracy",
        "Researched, implemented, and evaluated alternative 3D pose estimation and surface normal calculation methods using the Python Open3D library, improving color correction accuracy and overall rendering quality",
        "Developed Python unit and regression tests by exposing C++ pipelines via pybind11, enabling automated validation of processing workflows",
        "Collaborated in Agile workflows through daily stand-up meetings and project management tools including Jira, Git, and Azure DevOps"
      ],
      technologies: ["C++", "Python", "Open3D", "pybind11", "YAML", "CMake", "GTest", "Azure DevOps", "Git", "Jira", "Jenkins"]
    },
    {
      id: 2,
      company: "UBC Open Robotics",
      position: "Firmware/Software Member",
      duration: "Jan 2025 - Present",
      location: "Vancouver, BC",
      achievements: [
        "Designed and integrated a real-time telemetry system to ingest four sensor types (temperature, humidity, pressure, light) from an ESP32 source at configurable sampling rates, delivering structured data to a desktop visualization client with a 10 ms refresh cycle",
        "Implemented a TCP/JSON client–server interface with command controls for start/stop and configurable sampling rate, including automatic reconnection logic to improve reliability across firmware–client communication",
        "Firmware development using C/C++ for ultrasonic, IMU, and LiDAR sensors",
        "Implemented unit tests for sensor modules using CMake and Google Test to verify sensor accuracy and system reliability",
        "Collaborated on design of a scalable telemetry system for real-time sensor data collection, visualization, and post-processing using ESP-32 microcontrollers"
      ],
      technologies: ["C++", "C", "ESP32", "TCP/JSON", "CMake", "Google Test", "Embedded Systems", "RTOS", "ROS", "Git"]
    },
    {
      id: 3,
      company: "Math Tutor Network",
      position: "Math Tutor",
      duration: "2024 - 2025",
      location: "Vancouver, BC",
      achievements: [
        "Designed personalized lessons to help high school students grasp complex math concepts and boost academic performance",
        "Fostered confidence and problem-solving skills through one-on-one and group tutoring sessions",
        "Provided targeted support for homework, test preparation, and critical thinking development"
      ],
      skills: ["Communication", "Organization", "Patience", "Problem-solving", "Teaching"]
    }
  ];

  const skills = {
    "Programming Languages": [
      "Python",
      "C / C++",
      "Java",
      "JavaScript / TypeScript",
      "Swift",
      "SystemVerilog",
      "x86 Assembly",
      "ARM Assembly",
      "SQL",
      "HTML / CSS"
    ],
    "Hardware & Embedded Systems": [
      "FPGA Development",
      "Embedded Systems",
      "Arduino",
      "Circuit Analysis",
      "Lab Instrumentation",
      "Digital Logic"
    ],
    "Web & Software": [
      "HTML",
      "CSS",
      "REST APIs",
      "FastAPI",
      "React",
      "Next.js"
    ],
    "Developer Tools": [
      "Git",
      "Linux",
      "CMake",
      "Docker",
      "CI/CD",
      "Quartus Prime",
      "ModelSim",
      "Visual Studio",
      "VS Code",
      "PlatformIO"
    ]
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', paddingTop: '2rem' }}>
      <h1 style={{ textAlign: 'center', margin: '0 0 60px 0', color: '#90D5FF', fontSize: '2.5rem', width: '100%', fontWeight: 600 }}>
        Experience & Skills
      </h1>
      
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
