import { auth } from '../js/auth';

export function renderNavbar() {
  const isAuth = auth.isAuthenticated();
  const user = auth.getUser();
  
  const navbarHTML = `
    <nav class="bg-beige-100 shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <a href="/" class="flex-shrink-0 flex items-center">
              <span class="text-2xl font-bold text-primary-dark">MAIRAÉ</span>
            </a>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="/" class="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary-green text-sm font-medium">Home</a>
              <a href="/pages/shop.html" class="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-primary-green text-sm font-medium">Shop</a>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <a href="/pages/cart.html" class="text-gray-500 hover:text-primary-green transition-colors relative">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </a>
            ${isAuth ? `
              <span class="text-sm font-medium text-gray-700">Hi, ${user.name}</span>
              <button id="logoutBtn" class="text-sm font-medium text-red-600 hover:text-red-800">Logout</button>
            ` : `
              <a href="/pages/login.html" class="text-sm font-medium text-gray-700 hover:text-primary-dark">Login</a>
              <a href="/pages/register.html" class="btn-primary text-sm py-1.5 px-4 hidden sm:block">Sign Up</a>
            `}
          </div>
        </div>
      </div>
    </nav>
  `;

  document.getElementById('navbar-container').innerHTML = navbarHTML;

  if (isAuth) {
    document.getElementById('logoutBtn').addEventListener('click', () => {
      auth.logout();
    });
  }
}
