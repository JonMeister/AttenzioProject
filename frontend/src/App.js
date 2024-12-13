import './App.css';
import Approutes from './routes'

function App() {
  return (
    <div className="App">
      <header class="header">
        <a href="" class="header-logo">
          <h1>Atten<span style={{color: "Orange"}}>zio</span></h1>
        </a>
        <div class="header-right">
            <select class="language-selector" id="languageSelect" onchange="changeLanguage(this.value)">
                <option value="en">English (United States)</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
            </select>
            <a href="" class="sign-up-button" data-translate="signUp">Sign Up</a>
        </div>
      </header>

      <main class="home-main">
        <div class="login-container">
            <div class="login-card">
                <div class="login-header">
                    <h1 data-translate="loginTitle">Log in</h1>
                </div>
                <Approutes/>
                <div class="app-stores">
                    <a class="sign-up-button" href="https://www.apple.com/co/app-store/">App Store </a>
                    <a class="sign-up-button" href="https://play.google.com/store/games?hl=es_CO">Google Play</a>
                </div>
            </div>
        </div>
      </main>
      <footer class="footer">
        <a href="#" data-translate="about" data-modal="aboutModal">About</a>
        <a href="#" data-translate="terms" data-modal="termsModal">Terms of Service</a>
        <a href="#" data-translate="privacy" data-modal="privacyModal">Privacy Policy</a>
        <a href="#" data-translate="cookie" data-modal="cookieModal">Cookie Policy</a>
        <a href="#" data-translate="marketing" data-modal="marketingModal">Marketing</a>
        <a href="#" data-translate="copyright" data-modal="copyrightModal">@2024 Attenzio</a>
      </footer>
    </div>
  );
}

export default App;
