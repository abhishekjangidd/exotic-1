/** Demo catalog when API is unavailable — matches server product + customization shape */

const milk = [
  { name: 'Whole milk', price_modifier: 0 },
  { name: 'Oat milk', price_modifier: 0.75 },
  { name: 'Almond milk', price_modifier: 0.5 },
  { name: 'Soy milk', price_modifier: 0.5 },
]

const cream = [
  { name: 'None', price_modifier: 0 },
  { name: 'Light whip', price_modifier: 0.5 },
  { name: 'Extra whip', price_modifier: 1 },
]

const topping = [
  { name: 'None', price_modifier: 0 },
  { name: 'Cocoa dust', price_modifier: 0.25 },
  { name: 'Caramel drizzle', price_modifier: 0.75 },
]

const std = [
  { type: 'milk', choices: milk },
  { type: 'cream', choices: cream },
  { type: 'topping', choices: topping },
]

export const DUMMY_PRODUCTS = [
  {
    id: 101,
    name: 'Velvet Mocha',
    tagline: 'Single-origin cocoa, silky texture, zero compromise.',
    base_price: 6.25,
    category: 'signature',
    image_url:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=900&q=85&auto=format&fit=crop',
    customizations: std,
  },
  {
    id: 102,
    name: 'Cold Brew Reserve',
    tagline: 'Slow-steeped for 18 hours — crisp, chocolatey finish.',
    base_price: 5.5,
    category: 'cold',
    image_url:
      'https://images.unsplash.com/photo-1464977823424-1f2f4e0d6d8a?w=900&q=85&auto=format&fit=crop',
    customizations: std,
  },
  {
    id: 103,
    name: 'Honey Oat Latte',
    tagline: 'Wildflower honey meets toasted oat — your new daily.',
    base_price: 5.95,
    category: 'espresso',
    image_url:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=85&auto=format&fit=crop',
    customizations: std,
  },
  {
    id: 104,
    name: 'Caramel Cloud',
    tagline: 'Whipped cap, salted caramel, café comfort.',
    base_price: 6.5,
    category: 'signature',
    image_url:
      'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=900&q=85&auto=format&fit=crop',
    customizations: std,
  },
  {
    id: 105,
    name: 'Espresso Tonic',
    tagline: 'Bright citrus tonic lifts a double shot — afternoon clarity.',
    base_price: 5.25,
    category: 'espresso',
    image_url:
      'https://images.unsplash.com/photo-1510591508098-2294db0d5c26?w=900&q=85&auto=format&fit=crop',
    customizations: std,
  },
  {
    id: 106,
    name: 'Vanilla Bean Frappé',
    tagline: 'Real vanilla, crushed ice, dessert-level indulgence.',
    base_price: 6.75,
    category: 'cold',
    image_url:
      'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=900&q=85&auto=format&fit=crop',
    customizations: std,
  },
]

export const CATEGORIES = [
  { id: 'all', label: 'All drinks' },
  { id: 'signature', label: 'Signature' },
  { id: 'espresso', label: 'Espresso' },
  { id: 'cold', label: 'Cold brew' },
]
