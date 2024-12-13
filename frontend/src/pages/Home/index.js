import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './styles.css';
import logo from './images/attenzio-logo.png'
import appStoreLogo from './images/apple-store-button.png'
import playStoreLogo from './images/google-play-button.png'

const Home = () => {
  /*
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // Lógica de autenticación (simulada aquí con un console.log)
      console.log('Email:', email, 'Password:', password);
      // Redirigir si el inicio de sesión es exitoso
      navigate('/pos');
    } else {
      alert('Please fill in all fields');
    }
  };

  const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  };*/


  return (
    <div>
      <div className="login-header">
        <img src={logo} alt="Attenzio Logo" />
        <h1 data-translate="loginTitle">Log in</h1>
      </div>

      <form id="loginForm" /*onSubmit={handleSubmit}*/ className="login-form">
        <div className="form-group">
          <label htmlFor="email" data-translate="emailLabel">Email address</label>
          <input
            type="email"
            id="email"
            /*value={email}
            onChange={(e) => setEmail(e.target.value)}*/
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" data-translate="passwordLabel">Your password</label>
          <div className="password-group">
            <input
              type="password"
              id="password"
              /*value={password}
              onChange={(e) => setPassword(e.target.value)}*/
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="password-toggle"
              /*onClick={togglePasswordVisibility}*/
              title="Toggle password visibility"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </div>
        </div>

        <button type="submit" className="login-button">Log In</button>
      </form>

      <div className="forgot-password">
        <Link to="/recovery-password" data-translate="forgotPassword">Forgot your password?</Link>
      </div>

      <div className="signup-prompt">
        <span data-translate="noAccount">Don't have an account? </span>
        <Link to="/customer" className="signup-prompt-link">Sign Up</Link>
      </div>

      <div className="app-stores">
        <a href="https://www.apple.com/co/app-store/" target="_blank" rel="noopener noreferrer">
          <img src={appStoreLogo} alt="App Store"/>
        </a>
        <a href="https://play.google.com/store/games?hl=es_CO" target="_blank" rel="noopener noreferrer">
          <img src={playStoreLogo} alt="Google Play" />
        </a>
      </div>
    </div>
  );
};

export default Home;
