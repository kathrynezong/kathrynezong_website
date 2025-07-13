import React from 'react';

export default function ExperiencePage() {
  const experience = [
    {
      id: 1,
      company: "Tech Solutions Inc.",
      position: "Senior Full-Stack Developer",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading development of enterprise web applications and mentoring junior developers.",
      achievements: [
        "Led a team of 5 developers in building a customer portal serving 10,000+ users",
        "Reduced application load time by 40% through optimization and caching strategies",
        "Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes",
        "Mentored 3 junior developers, improving team productivity by 25%"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Kubernetes"]
    },
    {
      id: 2,
      company: "Digital Innovations LLC",
      position: "Frontend Developer",
      duration: "2020 - 2022",
      location: "Austin, TX",
      description: "Developed responsive web applications and collaborated with design teams.",
      achievements: [
        "Built 15+ responsive web applications using React and TypeScript",
        "Collaborated with UX/UI designers to implement pixel-perfect designs",
        "Improved website accessibility score from 65% to 95%",
        "Reduced bundle size by 30% through code splitting and optimization"
      ],
      technologies: ["React", "TypeScript", "CSS3", "Sass", "Webpack", "Jest"]
    },
    {
      id: 3,
      company: "Startup Ventures",
      position: "Junior Developer",
      duration: "2019 - 2020",
      location: "Remote",
      description: "Contributed to various startup projects and learned modern development practices.",
      achievements: [
        "Developed MVP for 3 different startup ideas",
        "Learned modern development practices and tools",
        "Contributed to open-source projects",
        "Built strong foundation in full-stack development"
      ],
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express"]
    }
  ];

  const skills = {
    "Frontend": ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Sass", "Tailwind CSS", "Material-UI"],
    "Backend": ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "Redis"],
    "DevOps": ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "Linux"],
    "Tools": ["VS Code", "Postman", "Figma", "Jira", "Slack", "Notion"]
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem', color: '#ffffff' }}>
        Work Experience & Skills
      </h1>
      
      {/* Experience Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ color: '#ffffff', marginBottom: '2rem', fontSize: '2rem' }}>Work Experience</h2>
        
        <div style={{ display: 'grid', gap: '2rem' }}>
          {experience.map(job => (
            <div key={job.id} style={{
              backgroundColor: '#2a2a2a',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ color: '#ffffff', marginBottom: '0.5rem', fontSize: '1.5rem' }}>
                    {job.position}
                  </h3>
                  <h4 style={{ color: '#646cff', marginBottom: '0.25rem', fontSize: '1.2rem' }}>
                    {job.company}
                  </h4>
                  <p style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                    {job.location} • {job.duration}
                  </p>
                </div>
              </div>
              
              <p style={{ color: '#cccccc', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                {job.description}
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#ffffff', marginBottom: '0.75rem' }}>Key Achievements:</h4>
                <ul style={{ color: '#cccccc', paddingLeft: '1.5rem' }}>
                  {job.achievements.map((achievement, index) => (
                    <li key={index} style={{ marginBottom: '0.5rem', lineHeight: '1.5' }}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 style={{ color: '#ffffff', marginBottom: '0.75rem' }}>Technologies Used:</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {job.technologies.map(tech => (
                    <span key={tech} style={{
                      backgroundColor: '#333',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Skills Section */}
      <section>
        <h2 style={{ color: '#ffffff', marginBottom: '2rem', fontSize: '2rem' }}>Technical Skills</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} style={{
              backgroundColor: '#2a2a2a',
              borderRadius: '12px',
              padding: '1.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{ color: '#646cff', marginBottom: '1rem', fontSize: '1.3rem' }}>
                {category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skillList.map(skill => (
                  <span key={skill} style={{
                    backgroundColor: '#333',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 