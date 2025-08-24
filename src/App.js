// import './App.css';
// import ArmstrongChecker from './components/ArmstrongChecker';
// import NaturalNumbers from './components/NaturalNumber';
// import FactorialCalculator from './components/FactorialCalculator';
// import GreatestOfThreeNumbers from './components/GreatestOfThreeNumbers';
// import InterviewQuestion from './components/InterviewQuestion';

// function App() {
//   return (
//     <div className="App">
//       <ArmstrongChecker/>
//       <NaturalNumbers count={10} />
//       <FactorialCalculator/>
//       <GreatestOfThreeNumbers/>
//       <InterviewQuestion/>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import { TbNumbers } from "react-icons/tb";
import { RiNumbersFill } from "react-icons/ri";
import { IoMdTrophy } from "react-icons/io";
import { FaBowlingBall } from "react-icons/fa";
// Import your components
import ArmstrongChecker from './components/ArmstrongChecker';
import NaturalNumbers from './components/NaturalNumber';
import FactorialCalculator from './components/FactorialCalculator';
import GreatestOfThreeNumbers from './components/GreatestOfThreeNumbers';
import InterviewQuestion from './components/InterviewQuestion';

// Home/Landing Page Component
const HomePage = () => {
  const components = [
    {
      name: 'Armstrong Checker',
      path: '/armstrong-checker',
      description: 'Check if a number is an Armstrong number',
      icon:<TbNumbers />
    },
    {
      name: 'Natural Numbers',
      path: '/natural-numbers',
      description: 'Display first N natural numbers',
      icon: <RiNumbersFill />
    },
    {
      name: 'Factorial Calculator',
      path: '/factorial-calculator',
      description: 'Calculate factorial of a number',
      icon: '÷'
    },
    {
      name: 'Greatest of Three',
      path: '/greatest-of-three',
      description: 'Find the greatest among three numbers',
      icon: <IoMdTrophy />
    },
    {
      name: 'Ball Box Game',
      path: '/interview-questions',
      description: 'Practice coding interview questions',
      icon: <FaBowlingBall/>
    }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '10px' }}>
          🚀 React Lab Works Dashboard
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#666' }}>
          Choose a component to explore its functionality
        </p>
      </header>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {components.map((component, index) => (
          <Link
            key={index}
            to={component.path}
            style={{
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '15px',
              padding: '25px',
              color: 'white',
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>
              {component.icon}
            </div>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '1.3rem' }}>
              {component.name}
            </h3>
            <p style={{ margin: 0, opacity: 0.9, fontSize: '0.95rem' }}>
              {component.description}
            </p>
          </div>
          </Link>
        ))}
      </div>

      <footer style={{
        textAlign: 'center',
        padding: '20px',
        borderTop: '1px solid #eee',
        color: '#666'
      }}>
        <p>Built with React Router • Click any card to explore!</p>
      </footer>
    </div>
  );
};

// Navigation Component
const Navigation = () => {
  return (
    <nav style={{
      background: '#fff',
      padding: '15px 20px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      marginBottom: '20px',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333', fontSize: '1.2rem', fontWeight: 'bold' }}>
          🏠 Home
        </Link>
        
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link to="/armstrong-checker" style={navLinkStyle}>Armstrong</Link>
          <Link to="/natural-numbers" style={navLinkStyle}>Natural Numbers</Link>
          <Link to="/factorial-calculator" style={navLinkStyle}>Factorial</Link>
          <Link to="/greatest-of-three" style={navLinkStyle}>Greatest</Link>
          <Link to="/interview-questions" style={navLinkStyle}>Ball Box Game</Link>
        </div>
      </div>
    </nav>
  );
};

const navLinkStyle = {
  textDecoration: 'none',
  color: '#667eea',
  fontSize: '0.95rem',
  fontWeight: '500',
  padding: '8px 12px',
  borderRadius: '6px',
  transition: 'all 0.2s ease'
};

// Page Wrapper Component
const PageWrapper = ({ children, title }) => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <div style={{
        background: 'white',
        borderRadius: '15px',
        padding: '30px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        minHeight: '60vh'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <Link 
            to="/" 
            style={{
              color: '#667eea',
              textDecoration: 'none',
              fontSize: '14px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            ← Back to Dashboard
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
        <Navigation />
        
        <Routes>
          {/* Home/Dashboard Route */}
          <Route path="/" element={<HomePage />} />
          
          {/* Component Routes */}
          <Route 
            path="/armstrong-checker" 
            element={
              <PageWrapper title="Armstrong Checker">
                <ArmstrongChecker />
              </PageWrapper>
            } 
          />
          
          <Route 
            path="/natural-numbers" 
            element={
              <PageWrapper title="Natural Numbers">
                <NaturalNumbers count={10} />
              </PageWrapper>
            } 
          />
          
          <Route 
            path="/factorial-calculator" 
            element={
              <PageWrapper title="Factorial Calculator">
                <FactorialCalculator />
              </PageWrapper>
            } 
          />
          
          <Route 
            path="/greatest-of-three" 
            element={
              <PageWrapper title="Greatest of Three Numbers">
                <GreatestOfThreeNumbers />
              </PageWrapper>
            } 
          />
          
          <Route 
            path="/interview-questions" 
            element={
              <PageWrapper title="Interview Questions">
                <InterviewQuestion />
              </PageWrapper>
            } 
          />
          
          {/* Catch-all route - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;