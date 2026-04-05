export function renderFooter() {
  const footerHTML = `
    <footer class="bg-primary-dark text-white pt-12 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 class="text-xl font-bold text-beige-100 mb-4">MAIRAÉ</h3>
            <p class="text-beige-300 text-sm">Transforming everyday pours into luxurious rituals with statement-making barware.</p>
          </div>
          <div>
            <h4 class="font-bold text-beige-100 mb-4 tracking-wider">SHOP</h4>
            <ul class="space-y-2 text-sm text-beige-300">
              <li><a href="/pages/shop.html?category=Martini+%26+Coupe+Glasses" class="hover:text-white transition-colors">Martini & Coupe Glasses</a></li>
              <li><a href="/pages/shop.html?category=Whisky+%26+Rocks+Glasses" class="hover:text-white transition-colors">Whisky & Rocks Glasses</a></li>
              <li><a href="/pages/shop.html?category=Wine+Glasses+%26+Goblets" class="hover:text-white transition-colors">Wine Glasses & Goblets</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-beige-100 mb-4 tracking-wider">ABOUT</h4>
            <ul class="space-y-2 text-sm text-beige-300">
              <li><a href="/#about" class="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="/#about" class="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="/#about" class="hover:text-white transition-colors">Our Values</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-beige-100 mb-4 tracking-wider">NEWSLETTER</h4>
            <p class="text-sm text-beige-300 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form class="flex" onsubmit="event.preventDefault(); alert('Subscribed!')">
              <input type="email" placeholder="Enter your email" class="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-900" required>
              <button type="submit" class="bg-primary-green hover:bg-green-700 px-4 py-2 rounded-r-md transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
        <div class="border-t border-primary-green pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-beige-300">
          <p>&copy; ${new Date().getFullYear()} MAIRAÉ. All rights reserved.</p>
          <div class="flex space-x-4 mt-4 md:mt-0">
            <a href="#" class="hover:text-white">Privacy Policy</a>
            <a href="#" class="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  document.getElementById('footer-container').innerHTML = footerHTML;
}
