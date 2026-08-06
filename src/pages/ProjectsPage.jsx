import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ProjectsPage() {
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

  const projects = [
    {
      id: 6,
      title: "Autonomous Vehicle Perception & Navigation System",
      subtitle: "UBC • Jan 2026 - Apr 2026",
      description: "An autonomous perception pipeline on the F1TENTH racing platform integrating LiDAR and RGB-D camera sensing for real-time obstacle detection and navigation.",
      achievements: [
        "Developed an autonomous perception pipeline on the F1TENTH racing platform using ROS",
        "Integrated LiDAR and RGB-D camera sensing for real-time obstacle detection and distance estimation, and implemented automatic emergency braking using depth and LiDAR distance thresholds",
        "Built a sign classification system with OpenCV to detect parking and traffic signs and adjust vehicle behavior"
      ],
      technologies: ["ROS", "Python", "C++", "OpenCV", "LiDAR", "RGB-D Camera"],
      github: "#",
      live: "#"
    },
    {
      id: 7,
      title: "ARC4 Encryption Cracking Accelerator",
      subtitle: "UBC • Mar 2026",
      description: "A SystemVerilog ARC4 stream cipher decryption engine with dual-core brute-force key cracking, verified through RTL simulation and deployed on FPGA hardware.",
      achievements: [
        "Designed and implemented an ARC4 stream cipher decryption engine in SystemVerilog, including key-scheduling and pseudo-random generation modules interfaced with on-chip memory (M10K) via a custom ready/enable handshaking protocol",
        "Built a brute-force key-cracking module that searches a 24-bit key space and validates decryption via ASCII plausibility checks, then parallelized it into a dual-core architecture achieving a 2x speedup over the single-core design",
        "Verified all modules through RTL and post-synthesis netlist simulation in ModelSim and deployed the design on FPGA hardware"
      ],
      technologies: ["SystemVerilog", "Digital Logic", "FPGA", "Quartus Prime", "ModelSim"],
      github: "#",
      live: "#"
    },
    {
      id: 0,
      title: "20-20-20 Break Timer Extension",
      subtitle: "Personal • Nov 2025",
      description: "A Chrome extension that helps protect your eyes by implementing the 20-20-20 rule with screen lock reminders.",
      achievements: [
        "Developed a Chrome extension timer that follows the 20-20-20 rule (every 20 minutes, look at something 20 feet away for 20 seconds)",
        "Implemented screen lock functionality to remind users to take breaks",
        "Created an intuitive interface for managing break reminders and timer settings"
      ],
      technologies: ["JavaScript", "Chrome Extension API", "HTML", "CSS"],
      github: "https://github.com/kathrynezong/healthy-eyes-chrome-ext",
      live: "#"
    },
    {
      id: 5,
      title: "ResumeCritic",
      subtitle: "Personal • Sept 2025 - Dec 2025",
      description: "A full-stack AI-powered resume analysis platform applying NLP techniques for automated resume–job matching with semantic similarity scoring and LLM evaluation.",
      achievements: [
        "Built a full-stack AI-powered resume analysis platform, applying NLP techniques for automated resume–job matching",
        "Designed and built a full-stack resume analysis platform using Next.js, FastAPI, and spaCy, enabling automated extraction and comparison of technical keywords from resumes and job descriptions",
        "Implemented semantic similarity scoring with sentence transformers and rule-based keyword extraction",
        "Implemented PDF parsing, NLP-based keyword matching, and scoring logic, paired with a responsive React UI for real-time analysis and feedback",
        "Integrated Google Gemini API for LLM-based resume evaluation of technical skills and experience"
      ],
      technologies: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "Gemini API", "spaCy", "NLP", "pdfplumber"],
      github: "https://github.com/kathrynezong/ResumeCritic",
      live: "#"
    },
    {
      id: 1,
      title: "Portfolio Website",
      subtitle: "Personal • Aug 2025",
      description: "A personal portfolio website built with React to showcase projects, experience, and skills.",
      achievements: [
        "Designed and implemented a responsive portfolio website using React and modern web technologies",
        "Created a clean, minimal interface with a light blue and white color scheme",
        "Built with React Router for seamless navigation between project and experience pages"
      ],
      technologies: ["React", "JavaScript", "HTML", "CSS", "Vite", "Vercel"],
      github: "https://github.com/kathrynezong/kathrynezong_website",
      live: "#"
    },
    {
      id: 2,
      title: "Obstacle Avoidance Vehicle",
      subtitle: "Personal • Dec 2024",
      description: "An autonomous vehicle project that demonstrates embedded systems programming and hardware integration.",
      achievements: [
        "Assembled key components including DC motors, motor driver, and ultrasonic sensor to enable autonomous navigation",
        "Wrote embedded C++ code for real-time sensor data processing and motor control",
        "Built supporting circuits to implement reliable obstacle detection and navigation"
      ],
      technologies: ["Arduino", "C++", "Hardware components"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Simple RISC Machine",
      subtitle: "UBC • Oct 2024 - Dec 2024",
      description: "A complete Simple RISC processor design with FSM-based control unit, verified through ModelSim simulation and deployed on FPGA hardware.",
      achievements: [
        "Designed and implemented a Simple RISC processor using SystemVerilog, developing the datapath and FSM-based control unit based on digital logic design principles",
        "Programmed memory mapped I/O for external communication, increasing processor versatility",
        "Verified instruction execution through ModelSim simulation using custom testbenches and synthesis checks in Quartus Prime",
        "Deployed the processor design on FPGA hardware to validate functionality and instruction-level performance"
      ],
      technologies: ["SystemVerilog", "Digital Logic", "FPGA", "Quartus Prime", "ModelSim"],
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "Quiz Application",
      subtitle: "UBC • Oct 2024 - Dec 2024",
      description: "A collaborative educational application designed to help UBC students study more efficiently.",
      achievements: [
        "Collaborated with other students to design and implement a quiz application",
        "Utilized a database with questions and answers, randomly generates questions for users to answer",
        "Designed to help UBC students study more efficiently and in a more interactive way"
      ],
      technologies: ["Swift"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', paddingTop: '2rem' }}>
      <h1 style={{ textAlign: 'center', margin: '0 0 60px 0', color: '#90D5FF', fontSize: '2.5rem', width: '100%', fontWeight: 600 }}>
        Projects
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'grid', gap: '3rem', maxWidth: '900px', width: '100%' }}>
          {projects.map(project => (
            <div key={project.id} id={`project-${project.id}`} className="modern-card" style={{
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
              <h3 style={{ color: '#90D5FF', fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>{project.title}</h3>
              <h4 style={{ color: '#6b7280', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{project.subtitle}</h4>
              <p style={{ color: '#1a1a1a', marginBottom: '1.5rem', lineHeight: '1.6' }}>{project.description}</p>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#90D5FF', marginBottom: '0.75rem', fontWeight: 600 }}>Description:</h4>
                <ul style={{ color: '#1a1a1a', paddingLeft: '1.5rem' }}>
                  {project.achievements.map((achievement, index) => (
                    <li key={index} style={{ marginBottom: '0.5rem', lineHeight: '1.5' }}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                {project.technologies.map(tech => (
                  <span key={tech} style={{
                    backgroundColor: '#E6F5FF',
                    color: '#90D5FF',
                    border: '1px solid #90D5FF',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.95rem',
                    fontWeight: 500
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              {project.github !== "#" && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                  color: '#90D5FF',
                  textDecoration: 'none',
                  fontWeight: 600,
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '2px solid #90D5FF',
                  borderRadius: '6px',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => { e.target.style.backgroundColor = '#90D5FF'; e.target.style.color = '#ffffff'; }}
                onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#90D5FF'; }}
                >
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
