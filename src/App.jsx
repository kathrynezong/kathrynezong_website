import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';

function Navbar() {
  const navItems = [
    { id: 'home',      label: 'Home' },
    { id: 'about',     label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience',label: 'Experience' },
    { id: 'projects',  label: 'Projects' },
    { id: 'contact',   label: 'Contact' },
  ];

  return (
    <nav style={{ backgroundColor: '#333', overflow: 'hidden' }}>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        {navItems.map(item => (
          <li key={item.id} style={{ flex: 1 }}>
            <a
              href={`#${item.id}`}
              style={{
                display: 'block',
                color: 'white',
                textAlign: 'center',
                padding: '14px 16px',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function BottomNavbar() {
  return (
    <nav style={{ 
      backgroundColor: '#1a1a1a', 
      borderTop: '1px solid #333',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      zIndex: 1000
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-around', 
        alignItems: 'center',
        padding: '1rem 0',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <Link 
          to="/" 
          style={{
            color: '#ffffff',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '0.875rem'
          }}
        >
          <span style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>🏠</span>
          <span>Home</span>
        </Link>
        
        <Link 
          to="/projects" 
          style={{
            color: '#ffffff',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '0.875rem'
          }}
        >
          <span style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>💻</span>
          <span>Projects</span>
        </Link>
        
        <Link 
          to="/experience" 
          style={{
            color: '#ffffff',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '0.875rem'
          }}
        >
          <span style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>💼</span>
          <span>Experience</span>
        </Link>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <div className="app-container">
      <Header />
      <Navbar />
      <main style={{ paddingTop: '80px', paddingBottom: '100px' }}>
        {/* Empty anchor for "Home" */}
        <section id="home" />

        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#242424' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={
            <div style={{ paddingBottom: '100px' }}>
              <Header />
              <ProjectsPage />
            </div>
          } />
          <Route path="/experience" element={
            <div style={{ paddingBottom: '100px' }}>
              <Header />
              <ExperiencePage />
            </div>
          } />
        </Routes>
        <BottomNavbar />
      </div>
    </Router>
  );
}
