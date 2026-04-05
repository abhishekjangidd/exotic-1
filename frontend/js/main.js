import '../styles/main.css';
import { renderNavbar } from '../components/navbar';
import { renderFooter } from '../components/footer';

// Initialize global UI features
document.addEventListener('DOMContentLoaded', () => {
  // Render layout wrappers if containers exist
  if (document.getElementById('navbar-container')) renderNavbar();
  if (document.getElementById('footer-container')) renderFooter();
});
