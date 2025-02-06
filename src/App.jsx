import { Link } from 'react-router-dom';
import './styles.css';

const App = () => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  return (
    <div className="app-container">
      <h1>Welcome to the Voting System</h1>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/voting">Voting</Link></li>
          {isAdmin && <li><Link to="/results">Results</Link></li>}
        </ul>
      </nav>
    </div>
  );
};

export default App;
