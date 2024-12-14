import './App.css';
import Approutes from './routes'

function App() {
  /*
  // Contenidos para cada modal
  const modalContents = {
    aboutModal: "Attenzio is a platform designed to manage attendance, attention, and student engagement in classes. Its primary goal is to enhance academic performance and simplify teaching management using technologies like Geolocation and QR Codes.",
    termsModal: "By using Attenzio, you agree to comply with the Terms of Service, which include responsible use of the platform, respect for data privacy, and adherence to the educational policies established by your institution.",
    privacyModal: "At Attenzio, we are committed to protecting your privacy. Personal data, such as name, email, and attendance records, will be handled securely and used exclusively for academic and administrative purposes.",
    cookieModal: "Attenzio uses cookies to enhance your experience on the platform. These cookies are used to personalize content and optimize system functionalities.",
    marketingModal: "Attenzio does not engage in marketing activities or share your personal data with third parties for advertising purposes. We focus solely on improving academic performance and educational management.",
    copyrightModal: "© 2024 Attenzio. All rights reserved. The platform is owned by its creators and is protected under intellectual property laws."
  };

  // Mostrar modal
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeButton = modal.querySelector(".close-button");

  // Función para abrir el modal
  function openModal(content) {
    modalBody.textContent = content; // Carga el contenido dinámico
    modal.classList.remove("hidden");
    modal.classList.add("visible");
  }

  // Función para cerrar el modal
  function closeModal() {
    modal.classList.remove("visible");
    modal.classList.add("hidden");
  }

  // Cerrar modal al hacer clic en el botón de cerrar
  closeButton.addEventListener("click", closeModal);

  // Cerrar modal al hacer clic fuera del contenido
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
  });

  // Añadir eventos a los enlaces del footer
  document.querySelectorAll('.footer a').forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const modalKey = link.getAttribute("data-modal");
        if (modalKey && modalContents[modalKey]) {
            openModal(modalContents[modalKey]);
        }
    });
  });*/
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

      <main className="home-main">
        <div class="login-container">
          <div class="login-card">
            <Approutes/>
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
