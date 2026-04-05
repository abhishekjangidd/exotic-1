const sequelize = require('../config/db');
const { Product, User } = require('../models');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const seedProducts = [
  {
    name: 'The Kraken Coupe',
    description: 'A dramatic coupe glass, perfect for sparkling drinks or cocktails, potentially adorned with tentacle motifs reminiscent of the legendary sea monster.',
    price: 299.99,
    image: 'https://i.etsystatic.com/60338618/r/il/f2ac7d/7710897976/il_794xN.7710897976_4hr2.jpg',
    category: 'Martini & Coupe Glasses',
    stock: 10
  },
  {
    name: 'The Golden Pegasus',
    description: 'A majestic wine glass that may feature golden accents and a winged stallion design, symbolizing grace and speed.',
    price: 899.50,
    image: 'https://i.etsystatic.com/60338618/r/il/a278c0/7065144562/il_794xN.7065144562_r4b8.jpg',
    category: 'Wine Glasses & Goblets',
    stock: 10
  },
  {
    name: 'The Medusa Martini',
    description: 'An elegant martini glass that likely features intricate, serpent-inspired detailing, offering a bold and mythical aesthetic for your cocktails.',
    price: 450.00,
    image: 'https://i.etsystatic.com/61025559/r/il/6151d7/7239133262/il_794xN.7239133262_80fh.jpg',
    category: 'Martini & Coupe Glasses',
    stock: 10
  },
  {
    name: 'The Alpha Stag-2',
    description: 'A powerful and classic design, this glass likely highlights the noble stag, making it an ideal choice for a sophisticated study or lounge.',
    price: 120.00,
    image: 'https://i.etsystatic.com/37171592/r/il/c7e055/5722735423/il_794xN.5722735423_46k2.jpg',
    category: 'Whisky & Rocks Glasses',
    stock: 10
  },
  {
    name: 'The Gorgon’s Gaze',
    description: 'A striking wine glass designed to capture attention, likely featuring snake-like accents that pay homage to the mythical Gorgon.',
    price: 65.00,
    image: 'https://i.etsystatic.com/60338618/r/il/e97f80/7061602497/il_794xN.7061602497_ay50.jpg',
    category: 'Wine Glasses & Goblets',
    stock: 10
  },
  {
    name: 'The Glen Martini-2',
    description: 'A refined martini glass that blends classic design with a touch of nature, possibly featuring a stag or highland-inspired motif.',
    price: 340.00,
    image: 'https://s.alicdn.com/@sc04/kf/Hd1220158595046989b35b2ad3911b7c1j.jpg?avif=close&webp=close',
    category: 'Martini & Coupe Glasses',
    stock: 10
  },
    {
    name: 'Knight’s Honor Goblet',
    description: 'A sturdy and traditional goblet, perfect for those who enjoy a medieval or royal touch to their dining experience.',
    price: 299.99,
    image: 'https://souvenir-vip.ru/wa-data/public/shop/products/00/webp/36/67/6736/images/25844/25844.0x500.webp',
    category: 'Wine Glasses & Goblets',
    stock: 10
  },
  {
    name: 'The Solitaire Scorpion',
    description: 'A unique and daring glass, likely featuring a scorpion motif, designed for those who appreciate sharp and distinctive barware.',
    price: 899.50,
    image: 'https://www.qoovee.com/media/cache/59/ab/59ab6896500ad62812200c591d47aef2.jpg',
    category: 'Wine Glasses & Goblets',
    stock: 10
  },
  {
    name: 'The Serpent’s Eye',
    description: 'A mysterious and handcrafted glass that probably features a singular, captivating eye or serpent detail, perfect for a themed collection.',
    price: 450.00,
    image: 'https://i.etsystatic.com/37171592/r/il/804466/5247828883/il_794xN.5247828883_lgu1.jpg',
    category: 'Whisky & Rocks Glasses',
    stock: 10
  },
  {
    name: 'The Alpha Stag',
    description: 'A powerful and classic design, this glass likely highlights the noble stag, making it an ideal choice for a sophisticated study or lounge.',
    price: 120.00,
    image: 'https://i.etsystatic.com/37171592/r/il/fcdde5/6042473549/il_794xN.6042473549_8wrh.jpg',
    category: 'Whisky & Rocks Glasses',
    stock: 10
  },
  {
    name: 'The Shipwreck Rocks',
    description: 'A rugged, Viking-inspired rocks glass that brings a sense of history and adventure to your favorite spirits.',
    price: 65.00,
    image: 'https://i.etsystatic.com/37171592/r/il/7a57ab/4677956462/il_794xN.4677956462_i3jy.jpg',
    category: 'Whisky & Rocks Glasses',
    stock: 10
  },
  {
    name: 'The Glen Martini',
    description: 'A refined martini glass that blends classic design with a touch of nature, possibly featuring a stag or highland-inspired motif.',
    price: 340.00,
    image: 'https://epiczone.in/cdn/shop/files/DSC03430.jpg?v=1721635507&width=3840',
    category: 'Martini & Coupe Glasses',
    stock: 10
  }

];

const seedDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected for seeding...');
    
    // Sync models - forces dropping and recreating
    await sequelize.sync({ force: true });
    
    // Creating seed products
    for (const prod of seedProducts) {
      await Product.create(prod);
    }
    console.log('Products seeded!');

    // Creating test user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);
    
    await User.create({
      name: 'Testy Tester',
      email: 'test@example.com',
      password: hashedPassword
    });
    console.log('Test user created: test@example.com / password123');

    console.log('Database seeding completed successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedDatabase();
