export function renderProductCard(product) {
  return `
    <div class="card bg-white group rounded-2xl p-4 flex flex-col h-full border border-beige-200">
      <a href="/pages/product.html?id=${product.id}" class="block relative aspect-square overflow-hidden rounded-xl mb-4 bg-beige-100">
        <img src="${product.image || 'https://via.placeholder.com/300x300?text=No+Image'}" alt="${product.name}" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500">
        ${product.stock < 5 ? `<span class="absolute top-2 right-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">Low Stock</span>` : ''}
      </a>
      <div class="flex-grow flex flex-col justify-between">
        <div>
          <p class="text-xs text-gray-500 mb-1 uppercase tracking-wider">${product.category}</p>
          <a href="/pages/product.html?id=${product.id}">
            <h3 class="text-lg font-semibold text-gray-900 leading-tight mb-2 hover:text-primary-green transition-colors line-clamp-2">${product.name}</h3>
          </a>
        </div>
        <div class="flex items-center justify-between mt-4">
          <span class="text-xl font-bold text-gray-900">$${Number(product.price).toFixed(2)}</span>
          <button onclick="window.addToCart(${product.id})" class="bg-beige-200 text-primary-dark p-2 rounded-full hover:bg-primary-green hover:text-white transition-colors duration-300 shadow-sm" aria-label="Add to cart">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;
}
