import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const Results = () => {
  const [winner, setWinner] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check the voting schedule from localStorage
  const votingStart = localStorage.getItem('votingStart');
  const votingEnd = localStorage.getItem('votingEnd');
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  const handleLogin = () => {
    if (email === 'admin@example.com' && password === 'admin123') {
      setIsLoggedIn(true); // Allow access to the results
    } else {
      alert('Invalid Admin Credentials');
    }
  };

  useEffect(() => {
    if (!isAdmin) {
      navigate('/login'); // If not an admin, redirect to login
    }
  }, [isAdmin, navigate]);

  return (
    <div className="results-container">
      <h1>Election Results</h1>
      {isLoggedIn ? (
        <div>
          {/* Check if the current date is within the voting window */}
          {new Date() >= new Date(votingStart) && new Date() <= new Date(votingEnd) ? (
            <h2>Winner: Alice Johnson</h2> // Display the winner once admin is logged in
          ) : (
            <p>Voting is closed. Results are unavailable.</p>
          )}
        </div>
      ) : (
        <div>
          <p>Enter Admin Credentials to View Results:</p>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Results;
